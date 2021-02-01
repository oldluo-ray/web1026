import { connect } from 'react-redux'
import { increment, incrementAsync } from '../redux/actions'
import Count from '../Count'

export default connect((state) => ({ count: state.count }), {
  increment,
  incrementAsync,
})(Count)
