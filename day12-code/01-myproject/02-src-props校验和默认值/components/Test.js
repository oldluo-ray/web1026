import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Test extends Component {
  static defaultProps = {
    list: [6, 7, 8],
  }
  render() {
    return (
      <div>
        {this.props.list.map((item) => {
          return <p key={item}>{item}</p>
        })}
      </div>
    )
  }
}

// 给Test组件做props校验.需要给Test组件,添加静态属性propTypes.值为对象.对象里面定义校验规则
Test.propTypes = {
  // list表示要对list属性进行校验.没有写的属性,就不进行校验
  // list属性后面的值是校验规则
  // 所有的规则都是PropTypes开头的
  // array表示list属性应该是数组
  // isRequired表示list属性必须写
  list: PropTypes.array.isRequired,
}

export default Test
