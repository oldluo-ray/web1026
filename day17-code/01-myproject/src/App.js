import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <div>
            <List></List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    )
  }
}
