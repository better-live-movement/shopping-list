import { connect } from 'react-redux'
import { addItem } from './adderActions'
import Adder from './adder'


const mapDispatchToProps = dispatch => ({
  addItem: text => dispatch(addItem(text))
})

export default connect(
  mapDispatchToProps
)(Adder)
