import knex from './../../../config/knex.config.js';

const memoriesTable = 'memories';
const memoriesFields = [
  'memories.id as memory_id',
  'memories.title',
  'memories.address',
  'memories.location',
  'memories.formatted_address',
  'memories.date_event',
  'memories.description',
  'memories.published',
  'memories.user_id',
  'memories.created_at as memory_created_at',
  'memories.updated_at as memory_updated_at',
];
const memoryPhotosFields = [
  'mp.id as photo_id',
  'mp.memory_id',
  'mp.url',
  'mp.description as photo_description',
  'mp.created_at as photo_created_at',
  'mp.updated_at as photo_updated_at',
];

const conditionHandlers = {
  id: (memoriesQuery, value) => memoriesQuery.where('memories.id', value),
  user_id: (memoriesQuery, value) =>
    memoriesQuery.where('memories.user_id', value),
  title: (memoriesQuery, value) =>
    memoriesQuery.where('memories.title', 'ilike', `%${value}%`),
  description: (memoriesQuery, value) =>
    memoriesQuery.where('memories.description', 'ilike', `%${value}%`),
  sort_field: (bookingsQuery, value, sort) => {
    if (sort === 'down') {
      bookingsQuery.orderBy(value, 'desc');
    } else {
      bookingsQuery.orderBy(value, 'asc');
    }
  },
};

export default {
  async getMemoriesByCondition(condition = {}, trx = knex) {
    let sort;
    if ('sortDirection' in condition) {
      sort = condition.sortDirection;
      delete condition.sortDirection;
    }
    try {
      const memoriesQuery = trx(memoriesTable)
        .select([
          ...memoriesFields,
          knex.raw('ST_AsEWKT(location) as location'),
          ...memoryPhotosFields,
        ])
        .leftJoin('memory_photos as mp', 'mp.memory_id', 'memories.id');

      for (const [key, value] of Object.entries(condition)) {
        const handler = conditionHandlers[key];
        if (handler) {
          handler(memoriesQuery, value, sort);
        } else {
          memoriesQuery.where(key, value);
        }
      }

      const result = await memoriesQuery;
      if (!result.length) {
        return null;
      }

      const groupedResult = result.reduce((acc, row) => {
        const memoryIndex = acc.findIndex(
          (memory) => memory.memory_id === row.memory_id,
        );

        const photo = {
          id: row.photo_id,
          url: row.url,
          description: row.photo_description,
          created_at: row.photo_created_at,
          updated_at: row.photo_updated_at,
        };

        if (memoryIndex === -1) {
          acc.push({
            memory_id: row.memory_id,
            title: row.title,
            address: row.address,
            location: row.location,
            formatted_address: row.formatted_address,
            date_event: row.date_event,
            description: row.description,
            published: row.published,
            user_id: row.user_id,
            created_at: row.memory_created_at,
            updated_at: row.memory_updated_at,
            memory_photos: row.photo_id ? [photo] : [],
          });
        } else {
          if (row.photo_id) {
            acc[memoryIndex].memory_photos.push(photo);
          }
        }
        return acc;
      }, []);

      return groupedResult;
    } catch (error) {
      console.error('Error fetching memories by condition:', error.message);
      throw error;
    }
  },
};
