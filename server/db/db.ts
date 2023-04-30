import config from './knexfile'
import knex from 'knex'
import { User, Starsign, UserData } from '../../common/models'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getStarsigns(db = connection): Promise<Starsign[]> {
  return db('starsigns').select()
}

export function getUsers(db = connection): Promise<User[]> {
  return db('user').select()
}

export function addUser(user: User, db = connection): Promise<User[]> {
  return db('user')
    .insert(user)
    .returning(['name', 'sun', 'moon', 'rising', 'added_by_user'])
}

export function deleteUser(id: number, db = connection): Promise<number> {
  return db('user').del().where('id', id)
}

export function updateUser(user: User, db = connection): Promise<number> {
  return db('user').update(user).where('id', user.id)
}

export function userCanEdit(user: User, auth0Id: string, db = connection) {
  return db('user')
    .where('id', user.id)
    .first()
    .then((user: UserData) => {
      if (user.added_by_user !== auth0Id) {
        throw new Error('Unauthorized')
      }
    })
}

export function userCanDelete(
  userId: number,
  auth0Id: string,
  db = connection
) {
  return db('user')
    .where('id', userId)
    .first()
    .then((user: UserData) => {
      if (user.added_by_user !== auth0Id) {
        throw new Error('Unauthorized')
      }
    })
}
