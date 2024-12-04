import ApiError from '../../middlewares/exceptions/api-errors.js';
import memoriesModel from '../../data-layer/models/memories-model.js';

const queryMappings = {
  id: 'id',
  user_id: 'user_id',
  sourceType: 'source_type',
  sourceUrl: 'source_url',
  title: 'title',
  description: 'description',
  sortField: 'sort_field',
  sortDirection: 'sortDirection',
};

class MemoriesController {
  async getMemories(req, res) {
    let conditions = {};
    try {
      const queryParams = req.query;
      for (const key in queryParams) {
        const mappedKey = queryMappings[key];
        if (mappedKey) {
          conditions[mappedKey] = queryParams[key];
        }
      }
      const response = await memoriesModel.getMemoriesByCondition(conditions);
      if (!response) {
        return res.json(ApiError.NotFound('Memories not found'));
      }
      return res.json(response);
    } catch (error) {
      console.error(error);
      return res.json(ApiError.IntServError(error.message));
    }
  }

  async createMemory(req, res) {
    const memory = req.body;
    try {
      const response = await memoriesModel.createMemory(memory);
      if (!response) {
        return res.json(ApiError.BadRequest('Memory not created'));
      }
      return res.json(response);
    } catch (error) {
      console.error(error);
      return res.json(ApiError.IntServError(error.message));
    }
  }
}

export default new MemoriesController();
