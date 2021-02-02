import { connect } from 'react-redux'
import { addtodo } from '../redux/actions'
import Header from '../components/Header/Header'

export default connect(null, { addtodo })(Header)
