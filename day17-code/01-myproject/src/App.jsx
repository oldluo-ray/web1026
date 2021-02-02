import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import List from './container/ListContainer'
import Search from './pages/Search'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Search />
          <List />
        </div>
      </Provider>
    )
  }
}
