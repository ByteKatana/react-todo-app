import { body, ValidationChain } from 'express-validator'
import { Priority } from '../enums/Priority'
import { Status } from '../enums/Status'
export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title required')
    .trim()
    .isString()
    .withMessage('Title need to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is required')
    .isString()
    .withMessage('The date needs to be valid date format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.high, Priority.normal, Priority.low])
    .withMessage('Priority can only be high,normal or low'),
  body('status')
    .trim()
    .isIn([Status.completed, Status.inProgress, Status.todo])
    .withMessage('Status can only be completed, in progress or todo'),
]

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The task id is required')
    .trim()
    .isString()
    .withMessage('ID needs to be a valid uuid format'),
  body('status')
    .trim()
    .isIn([Status.completed, Status.inProgress, Status.todo])
    .withMessage('Status can only be completed, in progress or todo'),
]
