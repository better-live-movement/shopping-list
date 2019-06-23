const items = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state.map(item =>
      (item.id === action.id)
        ? {...item, inCart: !item.inCart}
        : item
      )
    default:
      return state
  }
}
