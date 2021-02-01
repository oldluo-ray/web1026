import React, { Component } from 'react'
// 从react-redux这个包包里面,导出一个高阶组价函数
// 这个函数.用来连接当前Count组件和redux
import { connect } from 'react-redux'
import { increment } from './redux/actions'

class Count extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.count}</div>
        <button
          onClick={() => {
            this.props.incre(1)
          }}
        >
          按钮+1
        </button>
        <button
          onClick={() => {
            this.props.incre(5)
          }}
        >
          按钮+5
        </button>
      </div>
    )
  }
}

// 注意:如果connect第一次调用的时候,什么都没有写,那么在react的组件中,只能通过this.props拿到一个dispatch方法
// 如果要拿到redux中数据,那么connect函数第一次调用,的第一个参数,要求传入一个函数

// 这个函数,在第一个调用conect的时候,会执行一次,拿到redux中的数据,传入Count中.那么后面当redux的数据发生变化了,react-redux底层会自动调用这个函数,将最新的数据,传递到Count组件中
function mapStateToProps(state) {
  // 注意:state是redux中的所有数据
  // return的要求是一个对象,对象里面写了什么,在Count组件中,通过props就可以拿到什么
  return {
    count: state.count,
  }
}

// 把封装了dispatch的函数,传递给组件中
// 将这个函数,传入到connect第一次调用的第二个参数上面,Count组件就拿不到dispatch,
//拿到的就是这个函数体中返回的函数
function mapDispatchToProps(dispatch) {
  return {
    incre: function (data) {
      dispatch(increment(data))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)
