import validateMiddleware from '../../middlewares/validate-middleware.js';
// import authMiddleware from '../../middlewares/auth-middleware.js';
import memoriesController from '../controllers/memories-controller.js';
import { query } from 'express-validator';

const validateQueryMemory = [
  query('id')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('id is number'),
  query('user_id')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('user_id is number'),
  query('source_type').optional({ checkFalsy: true }).isString(),
  query('source_url').optional({ checkFalsy: true }).isString(),
  query('title')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('title is string'),
  query('description')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('description is string'),
];

export default function (app) {
  app.get(
    '/memories',
    validateQueryMemory,
    validateMiddleware,
    memoriesController.getMemories,
  );

  app.post(
    '/memories',
    validateQueryMemory,
    validateMiddleware,
    memoriesController.createMemory,
  );
}
