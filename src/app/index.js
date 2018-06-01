import React from 'react';
import ReactDom from 'react-dom';
 
class Layout extends React.Component {
  render(){
    return(
      <div>
        <h1>shopping-list</h1>
        <p>under construction</p>
      </div>
    );
  }
}
 
const app = document.getElementById('app');
 
ReactDom.render(<Layout/>, app);
console.log("It works realy! ;-)");
