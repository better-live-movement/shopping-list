import { connect } from 'react-redux'
import { toggleItem } from './listActions'
import ShoppingList from './shoppingList'

const getItems = (items) => {
  return items
}

const mapStateToProps = state => ({
  items: getItems(state.items)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)
