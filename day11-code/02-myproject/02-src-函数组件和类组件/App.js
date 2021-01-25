// 定义一个根组件
import React from 'react'
// 引入其他的组件
import Header from './components/Header'
import Footer from './components/Footer'
import Test from './components/Test'
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header></Header>
        <Footer></Footer>
        <Test />
      </div>
    )
  }
}

export default App
