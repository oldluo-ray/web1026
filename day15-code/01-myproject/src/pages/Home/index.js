import React, { Component } from 'react'
import Message from '../Message'
import News from '../News'
import { Link, Route, Switch } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <Link to="/home/news">News</Link>
            </li>
            <li>
              <Link to="/home/message">Message</Link>
            </li>
          </ul>
          <div>
            <div>
              <Switch>
                <Route path="/home" component={News} exact></Route>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/message" component={Message}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
