import React, { Component } from 'react';
import Budget from './Components/Budget'
import Guests from './Components/Guests'
//import ListOfItems from './Components/ListOfItems'
//import TotalCost from './Components/TotalCost'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: 0,
      guests: 0,
      list: [],
      cost: 0
    }
  }
  render(){
    return (
      <div>
        <h1>REACT Here, Tryna FUNCTION</h1>
        <Guests />
        <Budget />
      </div>
    );
  }
}

export default App;
