import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => {
          return <Item key={item.id} todo={item}></Item>
        })}
      </ul>
    )
  }
}
