import ApiError from '../../middlewares/exceptions/api-errors.js';
import memoryModel from '../../data-layer/models/memories-model.js';
import intersectionModel from '../../data-layer/models/intersection-model.js';

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function extractCoordinatesFromWKT(wktString) {
  if (!wktString) {
    console.error('WKT-строки відсутні!');
    return [undefined, undefined];
  }

  const coordinatesPart = wktString.match(/\(([^)]+)\)/);
  if (!coordinatesPart) {
    console.error('Некоректна WKT-строка:', wktString);
    return [undefined, undefined];
  }

  const coords = coordinatesPart[1].split(' ');
  return [parseFloat(coords[0]), parseFloat(coords[1])];
}

function calculateEndPoint(lon, lat, distance, azimuth) {
  const R = 6371000; // Радіус Землі в метрах
  const brng = azimuth;
  const d = distance;

  const lat1 = degreesToRadians(lat);
  const lon1 = degreesToRadians(lon);

  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(d / R) +
      Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng),
  );
  const lon2 =
    lon1 +
    Math.atan2(
      Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1),
      Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2),
    );

  return [
    parseFloat(((lon2 * 180) / Math.PI).toFixed(6)),
    parseFloat(((lat2 * 180) / Math.PI).toFixed(6)),
  ];
}

function extractCoordinates(wkt) {
  const coordinates = wkt
    .substring(wkt.indexOf('(') + 1, wkt.indexOf(')'))
    .split(' ');
  return [parseFloat(coordinates[0]), parseFloat(coordinates[1])];
}

const queryMappings = {
  userId: 'user_id',
  id: 'id',
  memoryId: 'memory_id',
  anotherMemoryId: 'another_memory_id',
  frequency: 'frequency',
  type: 'type',
};

export default {
  async createOrUpdateTarget(req, res) {
    const userId = req.user?.id;
    if (!userId) return res.json(ApiError.NotFound('user not was authorized'));
    const {
      memoryId,
      anotherMemoryId,
      azimuthDegrees,
      distance,
      type,
      frequency,
      description,
    } = req.body;

    const payload = {
      user_id: userId,
      memory_id: memoryId,
      another_memory_id: anotherMemoryId,
      azimuth_degrees: azimuthDegrees,
      distance,
      type,
      frequency,
      description,
    };

    try {
      const result = await intersectionModel.createOrUpdateTarget(payload);
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.json(ApiError.IntServError({ error: error.message }));
    }
  },

  async getTargets(req, res) {
    const { startDate, endDate, ...otherQueryParams } = req.query;
    let condition = {};
    if (req.user.role !== 'admin') condition.user_id = req.user.id;
    let response;
    if (startDate && endDate) {
      response = await intersectionModel.getTargetsByCondition(
        startDate,
        endDate,
      );
    } else {
      for (const key in otherQueryParams) {
        const mappedKey = queryMappings[key];
        if (mappedKey) {
          condition[mappedKey] = otherQueryParams[key];
        }
      }
      response = await intersectionModel.getTargetsByCondition(condition);
    }
    if (!response || (otherQueryParams.id && response.length === 0)) {
      return res.json(ApiError.NotFound('Target(s) not found'));
    }

    return res.json(response);
  },

  async getMemoryWithTargets(req, res) {
    const { startDate, endDate, ...otherQueryParams } = req.query;
    let condition = {};
    let response;
    if (startDate && endDate) {
      response = await intersectionModel.getTargetsByCondition(
        startDate,
        endDate,
      );
    } else {
      for (const key in otherQueryParams) {
        const mappedKey = queryMappings[key];
        if (mappedKey) {
          condition[mappedKey] = otherQueryParams[key];
        }
      }
      response =
        await intersectionModel.getMemoriesWithTargetsByCondition(condition);
    }
    if (!response || (otherQueryParams.id && response.length === 0)) {
      return res.json(ApiError.NotFound('Memory(s) not found'));
    }

    return res.json(response);
  },

  async removeTarget(req, res) {
    const { memoryId, id } = req.query;
    let condition = {};
    if (req.user.role !== 'admin') condition.user_id = req.user.id;
    let response;
    if (memoryId) condition.memory_id = memoryId;
    else if (id) condition.id = id;
    else return res.json(ApiError.BadRequest('parametr is empty'));
    response = await intersectionModel.removeTargetsByCondition(condition);
    if (!response) res.json(ApiError.BadRequest('remove target(s) failed'));
    return res.json(response);
  },

  async createIntersection(req, res) {
    const userId = req.user?.id;
    const {
      firstMemoryId,
      secondMemoryId,
      firstAngle,
      secondAngle,
      distance,
      type,
      frequency,
      description,
    } = req.body;

    const firstAzimuth = degreesToRadians(firstAngle);
    const secondAzimuth = degreesToRadians(secondAngle);

    const firstMemory = await memoryModel.getOneCoworkingById(firstMemoryId);
    const secondMemory = await memoryModel.getOneMemoryById(secondMemoryId);

    const [firstLongitude, firstLatitude] = extractCoordinatesFromWKT(
      firstMemory.location,
    );
    const [secondLongitude, secondLatitude] = extractCoordinatesFromWKT(
      secondMemory.location,
    );

    if (
      firstLongitude === undefined ||
      firstLatitude === undefined ||
      secondLongitude === undefined ||
      secondLatitude === undefined
    ) {
      return res.json(
        ApiError.IntServError({
          error: 'Помилка при разборі координат з WKT-строк.',
        }),
      );
    }

    // Calculate end points manually
    const [firstVectorEndLongitude, firstVectorEndLatitude] = calculateEndPoint(
      firstLongitude,
      firstLatitude,
      distance,
      firstAzimuth,
    );
    const [secondVectorEndLongitude, secondVectorEndLatitude] =
      calculateEndPoint(
        secondLongitude,
        secondLatitude,
        distance,
        secondAzimuth,
      );

    const queryParametrs = [
      firstLongitude,
      firstLatitude,
      firstVectorEndLongitude,
      firstVectorEndLatitude,
      secondLongitude,
      secondLatitude,
      secondVectorEndLongitude,
      secondVectorEndLatitude,
    ];

    const payload = {
      userId: userId,
      frequency: frequency,
      type: type,
      firstMemoryId: firstMemoryId,
      secondMemoryId: secondMemoryId,
      distance: distance,
      description: description,
    };

    try {
      const result = await intersectionModel.createIntersectionPoint(
        queryParametrs,
        payload,
      );

      const intersectionPointWKT = result.intersectionPoint;

      const [longitude, latitude] = extractCoordinates(intersectionPointWKT);

      // Create GeoJSON response
      const geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            properties: {},
          },
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [firstLongitude, firstLatitude],
                [firstVectorEndLongitude, firstVectorEndLatitude],
              ],
            },
            properties: { description: 'First Vector' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [secondLongitude, secondLatitude],
                [secondVectorEndLongitude, secondVectorEndLatitude],
              ],
            },
            properties: { description: 'Second Vector' },
          },
        ],
      };

      return res.json(geoJson);
    } catch (error) {
      console.error(error);
      return res.json(ApiError.IntServError(error));
    }
  },

  async getIntersections(req, res) {
    const { startDate, endDate, ...otherQueryParams } = req.query;
    let condition = {};
    if (req.user.role !== 'admin') condition.user_id = req.user.id;
    let response;
    if (startDate && endDate) {
      response = await intersectionModel.getIntersectionsByCondition(
        startDate,
        endDate,
      );
    } else {
      for (const key in otherQueryParams) {
        const mappedKey = queryMappings[key];
        if (mappedKey) {
          condition[mappedKey] = otherQueryParams[key];
        }
      }
      response = await intersectionModel.getIntersectionsByCondition(condition);
    }
    if (!response || (otherQueryParams.id && response.length === 0)) {
      return res.json(ApiError.NotFound('Intersection(s) not found'));
    }

    return res.json(response);
  },

  async clearIntersections(req, res) {
    const { startDate, endDate, ...otherQueryParams } = req.query;
    let condition = {};
    if (req.user.role !== 'admin') condition.user_id = req.user.id;
    let response;
    if (startDate && endDate) {
      response = await intersectionModel.clearIntersectionsByCondition(
        startDate,
        endDate,
      );
    } else {
      for (const key in otherQueryParams) {
        const mappedKey = queryMappings[key];
        if (mappedKey) {
          condition[mappedKey] = otherQueryParams[key];
        }
      }
      response =
        await intersectionModel.clearIntersectionsByCondition(condition);
    }
    if (!response || (otherQueryParams.id && response.length === 0)) {
      return res.json(
        ApiError.NotFound('Intersection(s) for deleting not found'),
      );
    }
    return res.json('Intersection(s) deleted succesfuly');
  },
};
