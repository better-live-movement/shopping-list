const addItemReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          inCart: false
        }
      ]
    default:
      return state
  }
}
