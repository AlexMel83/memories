import intersectionController from './../controllers/intersection-controller.js';
import { body, query } from 'express-validator';
import authMiddleware from '../../middlewares/auth-middleware.js';
import validateMiddleware from '../../middlewares/validate-middleware.js';

const validateBodyTarget = [
  body('memoryId')
    .notEmpty()
    .withMessage('Поле "memoryId" не має бути пустим')
    .isNumeric()
    .withMessage('Поле "memoryId" має бути числом'),
  body('anotherMeoryId')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('Поле "anotherMemoryId" має бути числом'),
  body('azimuthDegrees')
    .notEmpty()
    .withMessage('Поле "azimuthDegrees" не має бути пустим')
    .isFloat({ min: 0, max: 360 })
    .withMessage('Поле "azimuthDegrees" має бути числом'),
  body('distance')
    .notEmpty()
    .withMessage('Поле "distance" не має бути пустим')
    .isNumeric()
    .withMessage('Поле "distance" має бути числом'),
  body('type')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Поле "type" має бути рядком'),
  body('frequency')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('Поле "frequency" має бути числом'),
  body('description')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Поле "description" має бути рядком'),
];

const validateQuery = [
  query('id')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('id is number'),
  query('userId')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('userId is number'),
  query('memoryId')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('memoryId is number'),
  query('anotherMemoryId')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('anotherMemoryId is number'),
  query('frequency')
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('Поле "frequency" має бути числом'),
  query('type')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Поле "typey" має бути  рядком'),
  query('startDate')
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage('startDate must be a valid ISO 8601 date'),
  query('endDate')
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage('endDate must be a valid ISO 8601 date'),
];

const validateBodyPoint = [
  body('firstMemoryId')
    .notEmpty()
    .withMessage('Поле "firstMemoryId" не має бути пустим')
    .isNumeric()
    .withMessage('Поле "firstMemoryId" має бути числом'),
  body('secondMemoryId')
    .notEmpty()
    .withMessage('Поле "secondMemoryId" не має бути пустим')
    .isNumeric()
    .withMessage('Поле "secondMemoryId" має бути числом'),
  body('firstAngle')
    .notEmpty()
    .withMessage('Поле "firstAngle" не має бути пустим')
    .isFloat({ min: 0, max: 360 })
    .withMessage('Поле "firstAngle" має бути числом'),
  body('secondAngle')
    .notEmpty()
    .withMessage('Поле "secondAngle" не має бути пустим')
    .isFloat({ min: 0, max: 360 })
    .withMessage('Поле "secondAngle" має бути числом'),
  body('type')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Поле "type" має бути рядком'),
  body('description')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Поле "description" має бути рядком'),
  body('frequency')
    .notEmpty()
    .withMessage('Поле "frequency" не має бути пустим')
    .isNumeric()
    .withMessage('Поле "frequency" має бути числом'),
  body('distance')
    .notEmpty()
    .withMessage('Поле "distance" не має бути пустим')
    .isNumeric()
    .withMessage('Поле "distance" має бути числом'),
];

export default function (app) {
  app.post(
    '/targets',
    authMiddleware,
    validateBodyTarget,
    validateMiddleware,
    intersectionController.createOrUpdateTarget,
  );

  app.get(
    '/memorytargets',
    authMiddleware,
    validateQuery,
    validateMiddleware,
    intersectionController.getMemoryWithTargets,
  );

  app.get(
    '/targets',
    authMiddleware,
    validateQuery,
    validateMiddleware,
    intersectionController.getTargets,
  );

  app.delete(
    '/targets',
    authMiddleware,
    validateQuery,
    validateMiddleware,
    intersectionController.removeTarget,
  );

  app.post(
    '/intersections',
    authMiddleware,
    validateBodyPoint,
    validateMiddleware,
    intersectionController.createIntersection,
  );

  app.get(
    '/intersections',
    authMiddleware,
    validateQuery,
    validateMiddleware,
    intersectionController.getIntersections,
  );

  app.delete(
    '/intersections',
    authMiddleware,
    validateQuery,
    validateMiddleware,
    intersectionController.clearIntersections,
  );
}
