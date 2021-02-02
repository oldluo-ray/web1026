import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducer'

// process.nextTick(()=>{})
const env = process.env.NODE_ENV //可以获取到当前代码执行环境
export default createStore(
  userReducer,
  env === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
