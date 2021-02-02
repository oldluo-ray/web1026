import { connect } from 'react-redux'
import List from '../pages/List'
import { getUserDataAsync, setFlagCreator } from '../redux/actions'

export default connect(
  (state) => ({ users: state.userReducer.users, flag: state.flagReducer.flag }),
  {
    getUserDataAsync,
    setFlagCreator,
  }
)(List)
