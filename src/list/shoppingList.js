import PropTypes from 'prop-types'
import Item from './Item'

const ShoppingList = ({ items, toggleItem }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => toggleItem(item.id)}
      />
    )}
  </ul>
)

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleItem: PropTypes.func.isRequired
}

export default ShoppingList
