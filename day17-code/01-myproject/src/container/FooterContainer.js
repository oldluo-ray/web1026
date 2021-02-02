import { connect } from 'react-redux'
import { checktodos, deldonetodos } from '../redux/actions'
import Footer from '../components/Footer/Footer'

export default connect((state) => ({ list: state.todoList }), {
  checktodos,
  deldonetodos,
})(Footer)
