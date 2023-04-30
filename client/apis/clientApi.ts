import request from 'superagent'
import * as Models from '../../common/models'

export function grabSigns(): Promise<Models.Starsign[]> {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers(): Promise<Models.User[]> {
  return request.get('/api/v1/user').then((res) => res.body)
}

export function addAUser(user: Models.UserData, token: string) {
  return request
    .post('/api/v1/user')
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .then((res) => res.body)
}

export function deleteAUser(id: number, token: string) {
  return request
    .delete(`/api/v1/user/delete/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .then((dltdUser) => dltdUser.body)
}

export function updateAUser(user: Models.User, token: string) {
  return request
    .patch(`/api/v1/user/update/`)
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .then((res) => res.body)
}
