import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Count from './container/CountContainer'
import Demo from './Demo'

import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      // 一个react应用,这个Provider只需要写一次
      <Provider store={store}>
        <Count></Count>
        <Demo></Demo>
      </Provider>
    )
  }
}
