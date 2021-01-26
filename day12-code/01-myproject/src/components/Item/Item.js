import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { todo } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={todo.isDone} onChange={() => {}} />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }
}
