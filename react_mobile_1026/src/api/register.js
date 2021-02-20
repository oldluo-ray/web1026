// 定义了跟注册相关的发送异步请求的函数

import axios from 'axios'

function verifyPhone(phone) {
  return axios({
    // 配置了代理之后,请求的地址必须使用相对路径.如果使用绝对路径,代理就没有用了
    url: '/regist/verify_phone',
    method: 'post',
    data: {
      phone,
    },
  })
}

export { verifyPhone }
