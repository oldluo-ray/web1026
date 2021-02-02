import axios from 'axios'
import { GET_USER_SUCCESS, SETFLAG } from './constants'
// 定义actionCreator
export function getUserData(data) {
  return { type: GET_USER_SUCCESS, data }
}

// 定义一个异步的action
export function getUserDataAsync(username) {
  return (dispatch) => {
    // 发送异步请求
    axios({
      url: 'http://localhost:5000/search/users',
      method: 'get',
      params: {
        username,
      },
    }).then((res) => {
      // 表示成功
      console.log(res)
      dispatch(getUserData(res.data.items))
    })
  }
}

// 定义一个同步的action.用来修改flag数据
export function setFlagCreator(data) {
  return { type: SETFLAG, data }
}
