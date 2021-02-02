// 为了工作中能够协作开发,避免代码冲突,要将reducer分开写.但是store只能接受一个reducer函数,所以最终还需要将分开的reducer合并起来

import { combineReducers } from 'redux'
import userReducer from './userreducer'
import flagReducer from './flagreducer'
const rootReducer = combineReducers({
  userReducer,
  flagReducer,
})

// 将reducer分别写之前的数据存储的结构:
// {
//   users: [],
//   flag: 'all'
// }

// 分开写之后,再合并的数据结构
// {
//   xxx: {
//     users: []
//   },
//   yyy: {
//     flag: 'all'
//   }
// }
export default rootReducer
