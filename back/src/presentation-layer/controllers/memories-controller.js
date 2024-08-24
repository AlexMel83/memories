import ApiError from '../../middlewares/exceptions/api-errors.js';
import memoriesModel from '../../data-layer/models/memories-model.js';

const queryMappings = {
  id: 'id',
  user_d: 'user_id',
  title: 'title',
  description: 'description',
  sortField: 'sort_field',
  sortDirection: 'sortDirection',
};

class MemoriesController {
  async getMemories(req, res) {
    let condition = {};
    try {
      const queryParams = req.query;
      let response;
      for (const key in queryParams) {
        const mappedKey = queryMappings[key];
        if (mappedKey) {
          condition[mappedKey] = queryParams[key];
        }
      }
      response = await memoriesModel.getMemoriesByCondition(condition);

      if (!response || (queryParams.id && response.length === 0)) {
        return res.json(ApiError.NotFound('Memories not found'));
      }

      return res.json(response);
    } catch (error) {
      console.error(error);
      return res.json(ApiError.IntServError(error.message));
    }
  }
}

export default new MemoriesController();
