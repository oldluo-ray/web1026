import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
  reducer,
  // {初始化数据},
  // 使用中间件,调用applyMiddleware传入要使用中间件.可以使用多个.按照书写顺序执行
  // applyMiddleware(thunk,...)
  applyMiddleware(thunk)
)
export default store
