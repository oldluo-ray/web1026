import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      <div>
        <p>p标签</p>
        {/* 默认情况下,组件写在哪里,组件的结构就渲染在哪里 */}
        <Test></Test>
        <span>span标签</span>

        <div id="box"></div>
      </div>
    )
  }
}
