import React, { Component } from 'react';
import UserInput from './Components/UserInput'
//import ListOfItems from './Components/ListOfItems'
//import TotalCost from './Components/TotalCost'

import './App.css';

const listOfItems = [{name: "drinks", price: 5, priority: 6},
  {name: "dj", price: 100, priority: 1},
  {name: "pizza", price: 10, priority: 5},
  {name: "ice", price: 1, priority: 4},
  {name: "chairs", price: 5, priority: 2},
  {name: "plates", price: 5, priority: 3} ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: null,
      budgetList: [],
      cost: 0
    }
  }


  handleFormSubmit = (newForm) => {
    newForm.preventDefault()
    this.setState({budgetList: newForm})
  }



  render(){
    return (
      <div>
        <h1>REACT Here, Tryna FUNCTION</h1>
        <UserInput
          handleFormSubmit= {this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
