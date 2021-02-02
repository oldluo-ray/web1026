import { connect } from 'react-redux'
import List from '../pages/List'
import { getUserDataAsync } from '../redux/actions'

export default connect((state) => ({ users: state.users }), {
  getUserDataAsync,
})(List)
