import { INCREMENT } from './constants'

let initState = { count: 0, msg: 'hehe', info: '饿了' }
export default function (state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.data,
      }
    default:
      return state
  }
}
