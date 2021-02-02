import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  updatehandle = () => {
    let { todo } = this.props
    this.props.updatetodo(todo.id)
  }
  deleteHandle = () => {
    let { todo } = this.props
    this.props.deletetodo(todo.id)
  }
  render() {
    let { todo } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={this.updatehandle}
          />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteHandle}>
          删除
        </button>
      </li>
    )
  }
}
