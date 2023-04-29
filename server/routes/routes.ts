import express from 'express'
import * as db from '../db/db'
import { getStarsigns } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getStarsigns()
    .then((signs) => {
      res.json(signs)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const user = req.body
  db.addUser(user)
    .then((newUser) => {
      res.json(newUser[0])
    })
    .catch((err) => console.log(err.essage))
})

router.delete('/delete/:id/', (req, res) => {
  const user = Number(req.params.id)
  db.deleteUser(user)
    .then((dltdUser) => {
      res.json(dltdUser)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

router.patch('/update/', (req, res) => {
  db.updateUser(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export default router
