let initState = { count: 0 }
export default function (state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.data,
      }

    default:
      return state
  }
}
