import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import adder from '../addItem/addItem'
import listContainer from '../list/listContainer'

class Layout extends React.Component {
  render(){
    return(
      <div>
        <h1>shopping-list</h1>
        <adder />
        <listContainer />
      </div>
    );
  }
}

const app = document.getElementById('app');
const store = createStore(rootReducer)

ReactDom.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  app);
console.log("It works realy! ;-)");
