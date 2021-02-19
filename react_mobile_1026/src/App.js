import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routers from './config/router'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Router>
        {routers.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
              exact={item.exact}
            ></Route>
          )
        })}
      </Router>
    )
  }
}
