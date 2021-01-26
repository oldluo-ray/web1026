import React, { Component } from 'react'

// props的三个特点:
// 1. props可以接收任何类型的数据(组件,react元素)
// 2. 在构造器中无法直接通过this.props获取数据. 要在构造器上接收,然后传入super()
// 3. props的数据是只读的.不要去修改.但是如果修改的是对象里面的值,就可以.说明props底层是浅层对比

export default class Test extends Component {
  // constructor(props) {
  //   super(props)
  //   console.log('构造器', this.props)
  //   console.log('构造器', props)
  // }
  render() {
    // 类组件的实例身上有一个props属性,可以接收到使用Test组件时,利用属性=值这种形式传递过来的数据
    // props用于接收组件外部传过来的数据
    // console.log('render', this.props)
    // this.props.a = 1
    // this.props.count = 'nihao'
    this.props.obj.name = 'ls'
    console.log(this.props)
    return (
      <div>
        <h1>要展示App组件中count的值: {this.props.count}</h1>
      </div>
    )
  }
}
// import React from 'react'
// // 注意:如果是函数组件,就在组件的形参上接收
// export default function Test(props) {
//   console.log(props)
//   return (
//     <div>
//       {props.count}
//       {props.element}
//     </div>
//   )
// }
