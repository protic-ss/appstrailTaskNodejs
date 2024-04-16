import Tasks from "../models/tasks.js"
import { request } from "express"
import db from "../models/index.js"
import "dotenv/config"
import constants from '../utils/constants.json' with { type: "json" }

export async function getTaskById(req, res) {
  try {
    console.log(req.query)
    let task = await db.Tasks.findOne({where: {...req.query, isDeleted: false}})
    if(!task) task = {}
    return res.status(200).send({message: constants.messages.success[200].taskFetchedSuccessfully, data: task})
  } catch(err) {
    console.log(err)
    return res.status(500).send({message: constants.messages.error[500].somethingWentWrong})
  }
}

export async function getTasks(req, res) {
  try {
    let tasks = await db.Tasks.findAll({where:{isDeleted: false}})
    return res.status(200).send({message: constants.messages.success[200].taskFetchedSuccessfully, data: tasks})
  } catch(err) {
    console.log(err)
    return res.status(500).send({message: constants.messages.error[500].somethingWentWrong})
  }
}

export async function addTask(req, res) {
  try {
    console.log(`${req.baseUrl}${req.url}`)
    await db.Tasks.create(req.body)
    return res.status(200).send({message: constants.messages.success[200].taskCreatedSuccessfully})  
  } catch(err) {
    console.log(err)
    return res.status(500).send({message: constants.messages.error[500].somethingWentWrong})  
  }
}

export async function updateTask(req, res) {
  try {
    let task = await db.Tasks.findOne({where: {taskId: req.body.taskId, isDeleted: false}})
    if(!task) return res.status(404).send({message: constants.messages.error[404].taskNotFound})
    await db.Tasks.update(req.body, {where: {taskId: req.body.taskId, isDeleted: false}})
    return res.status(200).send({message: constants.messages.success[200].taskUpdatedSuccessfully})  
  } catch(err) {
    console.log(err)
    return res.status(500).send({message: constants.messages.error[500].somethingWentWrong})  
  }
}

export async function deleteTask(req, res) {
  try {
    await db.Tasks.update({isDeleted: true}, {where: {taskId: req.query.taskId}})
    return res.status(200).send({message: constants.messages.success[200].taskDeletedSuccessfully})
  } catch(err) {
    console.log(err)
    return res.status(500).send({message: constants.messages.error[500].somethingWentWrong})
  }
}