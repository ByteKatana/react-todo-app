import { Router } from 'express'
import { tasksController } from './tasks.controller'
import { createValidator, updateValidator } from './tasks.validator'

export const tasksRouter = Router()

tasksRouter.get('/tasks', tasksController.getAll)

tasksRouter.post('/tasks', createValidator, tasksController.create)

tasksRouter.put('/tasks', updateValidator, tasksController.update)
