// import React, { Component } from 'react'

// export default class Test extends Component {
//   render() {
//     // 类组件的实例身上有一个props属性,可以接收到使用Test组件时,利用属性=值这种形式传递过来的数据
//     // props用于接收组件外部传过来的数据
//     console.log(this.props)
//     return (
//       <div>
//         <h1>要展示App组件中count的值: {this.props.count}</h1>
//       </div>
//     )
//   }
// }
import React from 'react'
// 注意:如果是函数组件,就在组件的形参上接收
export default function Test(props) {
  console.log(props)
  return <div>{props.count}</div>
}
