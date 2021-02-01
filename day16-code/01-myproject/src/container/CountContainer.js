import { connect } from 'react-redux'
import { increment } from '../redux/actions'
import Count from '../Count'
// connect函数第二个参数的位置上,如果传的是函数,那么就将这个函数中返回的对象里面的属性名和函数传递给Count组件
// 注意:如果第二个参数的位置上,写的是一个对象.那么按照要求,就必须传入一个actionCreator. 这样写了之后,connect函数内部执行的时候,会帮我们创建一个新的函数.而这个新的函数,名字和我们传入的actionCreator一样

// function key(data){
//   dispatch(obj[key](data))
// }
// 这里的increment就是我们定义的actionCreator
export default connect((state) => ({ count: state.count }), {
  increment,
})(Count)
