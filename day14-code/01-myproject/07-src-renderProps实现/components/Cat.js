import React, { Component } from 'react'
// CatUrl是打包图片之后的地址
import CatUrl from '../assets/cat.gif'

export default class Cat extends Component {
  render() {
    let { x, y } = this.props.data
    x += 200
    y -= 50
    return (
      <div>
        {/* 注意:在react脚手架中写img标签请求图片的地址,不能写相对路径,可以写绝对路径/base64/导入的形式 */}
        <img
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  }
}
