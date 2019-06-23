import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, inCart, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: inCart ? 'none' : 'line-through'
    }}
  >
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  inCart: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
