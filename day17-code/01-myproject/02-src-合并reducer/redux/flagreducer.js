import { SETFLAG } from './constants'
let initState = { flag: 'all' }
export default function flagReducer(state = initState, action) {
  switch (action.type) {
    case SETFLAG:
      return {
        ...state,
        flag: action.data,
      }
    default:
      return state
  }
}
