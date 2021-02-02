import React, { Component } from 'react'
import Item from '../../container/ItemContainer'
import './List.css'
export default class List extends Component {
  render() {
    let { list } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => (
          <Item key={item.id} todo={item}></Item>
        ))}
      </ul>
    )
  }
}
