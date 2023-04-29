import { UserAction } from '../actions/astrology'
import * as Models from '../../common/models'

const initialState = [] as Models.User[]

export default function userchart(
  state = initialState,
  { type, payload }: UserAction
): Models.User[] {
  switch (type) {
    case 'RECEIVE_USERS':
      return payload
    case 'ADD_ONE_USER':
      return [...state, payload]
    case 'DEL_ONE_USER':
      return state.filter((user) => user.id !== payload)
    case 'UPD_ONE_USER':
      return state.map((user) => {
        if (user.id === payload.id) {
          return { ...user, ...payload }
        }
        return user
      })
    default:
      return state
  }
}
