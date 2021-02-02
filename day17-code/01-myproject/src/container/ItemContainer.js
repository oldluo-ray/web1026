import { connect } from 'react-redux'
import { updatetodo, deletetodo } from '../redux/actions'
import Item from '../components/Item/Item'

export default connect(null, { updatetodo, deletetodo })(Item)
