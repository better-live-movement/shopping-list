import { combineReducers } from 'redux';
import addItem from '../addItem/addItemReducer'
import list from '../list/listReducer'

export default combineReducers({
  addItem,
  list
})
