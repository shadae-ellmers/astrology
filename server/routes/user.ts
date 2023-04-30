import express from 'express'
import * as db from '../db/db'
import checkJwt, { JwtRequest } from '../auth0'
import { User } from '../../common/models'

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', checkJwt, (req: JwtRequest, res) => {
  const user = req.body
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    return res.status(401).send('Unauthorized')
  }

  const newChart: User = {
    id: user.id,
    name: user.name,
    sun: user.sun,
    moon: user.moon,
    rising: user.rising,
    added_by_user: auth0Id,
  }

  db.addUser(newChart)
    .then((newUser) => {
      res.json(newUser[0])
    })
    .catch((err: Error) => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

router.delete('/delete/:id/', checkJwt, (req: JwtRequest, res) => {
  const user = Number(req.params.id)
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  db.userCanDelete(user, auth0Id)
    .then(() => db.deleteUser(user))
    .then((dltdUser) => {
      res.json(dltdUser)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

router.patch('/update/', checkJwt, (req: JwtRequest, res) => {
  const user = req.body
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  db.userCanEdit(user, auth0Id)
    .then(() => db.updateUser(user))
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export default router
