import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Position render={(data) => <Cat data={data}></Cat>}></Position>
        <Position render={(data) => <Mouse data={data}></Mouse>}></Position> */}
        <Position>{(data) => <Cat data={data}></Cat>}</Position>
        <Position>{(data) => <Mouse data={data}></Mouse>}</Position>
      </div>
    )
  }
}
