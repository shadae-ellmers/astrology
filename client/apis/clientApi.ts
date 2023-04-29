import request from 'superagent'
import * as Models from '../../common/models'

export function grabSigns(): Promise<Models.Starsign[]> {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers(): Promise<Models.User[]> {
  return request.get('/api/v1/user').then((res) => res.body)
}

export function addAUser(user: Models.UserData) {
  return request
    .post('/api/v1/user')
    .send(user)
    .then((res) => res.body)
    .catch((err) => console.log('api', err.message))
}

export function deleteAUser(id: number) {
  return request
    .delete(`/api/v1/user/delete/${id}`)
    .then((dltdUser) => dltdUser.body)
}

export function updateAUser(user: Models.User) {
  return request
    .patch(`/api/v1/user/update/`)
    .send(user)
    .then((res) => res.body)
}
