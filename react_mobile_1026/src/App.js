import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routers from './config/router'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Suspense
        fallback={<div style={{ fontSize: 50, color: 'red' }}>loading...</div>}
      >
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
      </Suspense>
    )
  }
}
