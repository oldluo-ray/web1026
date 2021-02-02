import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default class Footer extends Component {
  updateAllTodos = () => {
    // 如果有一个不选中,点击全选,就都选中
    // 如果都选中,点击全选,就都不选中
    let { list } = this.props
    const res = list.every((item) => item.isDone)
    this.props.checktodos(res)
  }
  render() {
    let { list } = this.props
    let doneTotal = 0
    list.forEach((item) => {
      if (item.isDone) doneTotal++
    })
    let allTotal = list.length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneTotal === allTotal}
            onChange={this.updateAllTodos}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button className="btn btn-danger" onClick={this.props.deldonetodos}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
