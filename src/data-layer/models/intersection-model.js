import knex from '../../../config/knex.config.js';
const intersectionTable = 'intersections',
  targetsTable = 'targets',
  memoriesTable = 'memories';

const intersectionFields = [
  'intersections.id',
  'intersections.location',
  'intersections.frequency',
  'intersections.type',
  'intersections.user_id',
  'intersections.distance',
  'intersections.firs_memory_id',
  'intersections.second_memory_id',
  'intersections.description',
  'intersections.created_at',
  'intersections.updated_at',
];

const targetsFields = [
  'targets.id',
  'targets.memory_id',
  'targets.another_memory_id',
  'targets.azimuth_degrees',
  'targets.type',
  'targets.distance',
  'targets.frequency',
  'targets.description',
  'targets.user_id',
  'targets.created_at',
  'targets.updated_at',
];

const memoriesFields = [
  'memories.id as memory_id',
  'memories.title',
  'memories.address',
  'memories.location',
];

const conditionHandlers = {
  id: (query, value) => query.where('id', value),
  memory_id: (query, value) => query.where('memory_id', value),
  another_memory_id: (query, value) => query.where('another_memory_id', value),
  user_id: (query, value) => query.where('user_id', value),
  type: (query, value) => query.where('type', value),
  frequency: (query, value) => query.where('frequency', value),
};

export default {
  async createOrUpdateTarget(payload) {
    const { memory_id } = payload;
    try {
      const existingTarget = await knex(targetsTable)
        .where({ memory_id })
        .first();

      if (existingTarget) {
        const [result] = await knex(targetsTable)
          .where({ memory_id })
          .update({ ...payload, updated_at: knex.fn.now() })
          .returning('*');
        return result;
      } else {
        const [result] = await knex(targetsTable)
          .insert(payload)
          .returning('*');
        return result;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async getTargetsByCondition(condition = {}) {
    try {
      const targetsQuery = knex(targetsTable).select(targetsFields);

      if (condition['user_id']) {
        targetsQuery.where('targets.user_id', condition['user_id']);
        delete condition['user_id'];
      }

      for (const [key, value] of Object.entries(condition)) {
        const handler = conditionHandlers[key];
        if (handler) {
          handler(targetsQuery, value);
        } else {
          targetsQuery.where(key, value);
        }
      }

      return await targetsQuery;
    } catch (error) {
      console.error('Error fetching targets by condition:', error.message);
      throw error;
    }
  },

  async getMemoriesWithTargetsByCondition(condition = {}) {
    try {
      const targetsQuery = knex(targetsTable)
        .select(targetsFields)
        .rightJoin(memoriesTable, 'targets.memory_id', 'memories.id')
        .select([
          ...memoriesFields,
          ...targetsFields,
          knex.raw('ST_AsEWKT(location) as location'),
        ]);

      if (condition['user_id']) {
        targetsQuery.where('memories.user_id', condition['user_id']);
        delete condition['user_id'];
      }

      for (const [key, value] of Object.entries(condition)) {
        const handler = conditionHandlers[key];
        if (handler) {
          handler(targetsQuery, value);
        } else {
          targetsQuery.where(key, value);
        }
      }

      return await targetsQuery;
    } catch (error) {
      console.error('Error fetching targets by condition:', error.message);
      throw error;
    }
  },

  async removeTargetsByCondition(condition = {}) {
    try {
      const targetsQuery = knex(targetsTable);
      if (condition.id) {
        targetsQuery.where('targets.id', condition.id);
        delete condition.id;
      }
      if (condition.memory_id) {
        targetsQuery.where('targets.memory_id', condition.memory_id);
        delete condition.memory_id;
      }
      if (condition.user_id) {
        targetsQuery.where('targets.user_id', condition.user_id);
        delete condition.user_id;
      }
      const result = await targetsQuery.delete();
      if (result) return { message: 'Target(s) deleted successfully' };
      else return { message: 'Ціль вже було  видалено' };
    } catch (error) {
      console.error('Error deleting targets by condition:', error.message);
      throw error;
    }
  },

  async createIntersectionPoint(queryParametrs, payload) {
    const trx = await knex.transaction();
    try {
      const intersectionResult = await await trx.raw(
        `SELECT
                        ST_AsText(ST_Intersection(
                            ST_MakeLine(
                                ST_SetSRID(ST_MakePoint(?, ?), 4326),
                                ST_SetSRID(ST_MakePoint(?, ?), 4326)
                            ),
                            ST_MakeLine(
                                ST_SetSRID(ST_MakePoint(?, ?), 4326),
                                ST_SetSRID(ST_MakePoint(?, ?), 4326)
                            )
                        )) AS intersection_point
                    `,
        queryParametrs,
      );

      const intersectionPointWKT =
        intersectionResult.rows[0].intersection_point;

      if (
        !intersectionPointWKT ||
        intersectionPointWKT === 'LINESTRING EMPTY'
      ) {
        throw new Error('Точка перетину не знайдена');
      }

      const intersectionData = {
        location: trx.raw(`ST_GeomFromText(?, 4326)::geography`, [
          intersectionPointWKT,
        ]),
        frequency: payload.frequency,
        type: payload.type || 'unknown',
        user_id: payload.userId,
        distance: payload.distance,
        first_memory_id: payload.firstMemoryId,
        second_memory_id: payload.secondMemoryId,
        description: payload.description || null,
      };

      const [intersectionId] = await trx(intersectionTable)
        .insert(intersectionData)
        .returning('id');

      await trx.commit();

      return {
        intersectionId,
        intersectionPoint: intersectionPointWKT,
        intersectionData,
      };
    } catch (error) {
      await trx.rollback();
      console.error(error);
      throw error;
    }
  },

  async getIntersectionsByCondition(condition = {}) {
    try {
      const intersectionsQuery = knex(intersectionTable).select([
        ...intersectionFields,
        knex.raw('ST_AsEWKT(location) as location'),
      ]);

      if (condition['user_id']) {
        intersectionsQuery.where('intersections.user_id', condition['user_id']);
        delete condition['user_id'];
      }

      if (condition.memory_id) {
        const memoryId = condition.memory_id;
        intersectionsQuery.where(function () {
          this.where('intersections.first_memory_id', memoryId).orWhere(
            'intersections.second_memory_id',
            memoryId,
          );
        });
        delete condition.memory_id;
      }

      for (const [key, value] of Object.entries(condition)) {
        const handler = conditionHandlers[key];
        if (handler) {
          handler(intersectionsQuery, value);
        } else {
          intersectionsQuery.where(key, value);
        }
      }

      return await intersectionsQuery;
    } catch (error) {
      console.error(
        'Error fetching intersections by condition:',
        error.message,
      );
      throw error;
    }
  },

  async clearIntersectionsByCondition(condition = {}) {
    try {
      const intersectionsQuery = knex(intersectionTable);

      if (condition.user_id) {
        intersectionsQuery.where('intersections.user_id', condition.user_id);
        delete condition.user_id;
      }

      if (condition.memory_id) {
        const memoryId = condition.memory_id;
        intersectionsQuery.where(function () {
          this.where('intersections.first_memory_id', memoryId).orWhere(
            'intersections.second_memory_id',
            memoryId,
          );
        });
        delete condition.memory_id;
      }

      for (const [key, value] of Object.entries(condition)) {
        const handler = conditionHandlers[key];
        if (handler) {
          handler(intersectionsQuery, value);
        } else {
          intersectionsQuery.where(key, value);
        }
      }

      const result = await intersectionsQuery.delete();

      return result;
    } catch (error) {
      console.error(
        'Error deleting intersections by condition:',
        error.message,
      );
      throw error;
    }
  },
};
