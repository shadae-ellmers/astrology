import { UserAction } from '../actions/astrology'
import * as Models from '../../common/models'

const initialState = [] as Models.Starsign[]

export default function starsigns(
  state = initialState,
  { type, payload }: UserAction
): Models.Starsign[] {
  switch (type) {
    case 'RECEIVE_SIGNS':
      return payload
    default:
      return state
  }
}
