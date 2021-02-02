import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>xxx</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }
}
