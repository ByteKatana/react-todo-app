import { instanceToPlain, plainToInstance } from 'class-transformer'
import { AppDataSource } from '../..'
import Tasks from './tasks.entity'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { UpdateResult } from 'typeorm'

class TasksController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Tasks[]

    try {
      allTasks = await AppDataSource.getRepository(Tasks).find({
        order: {
          date: 'ASC',
        },
      })
      allTasks = instanceToPlain(allTasks) as Tasks[]
      return res.json(allTasks).status(200)
    } catch (error) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const newTask = new Tasks()
    newTask.title = req.body.title
    newTask.date = req.body.date
    newTask.description = req.body.description
    newTask.priority = req.body.priority
    newTask.status = req.body.status

    let createdTask

    try {
      createdTask = await AppDataSource.getRepository(Tasks).save(newTask)

      createdTask = instanceToPlain(createdTask) as Tasks

      return res.json(createdTask).status(201)
    } catch (error) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    let task: Tasks | null

    try {
      task = await AppDataSource.getRepository(Tasks).findOne({
        where: { id: req.body.id },
      })
    } catch (error) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }

    if (!task) {
      return res
        .status(404)
        .json({ error: 'The task with given ID doesnt exist' })
    }

    let updatedTask: UpdateResult

    try {
      updatedTask = await AppDataSource.getRepository(Tasks).update(
        req.body.id,
        plainToInstance(Tasks, {
          status: req.body.status,
        }),
      )
      updatedTask = instanceToPlain(updatedTask) as UpdateResult
      return res.json(updatedTask).status(200)
    } catch (error) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }
}

export const tasksController = new TasksController()
