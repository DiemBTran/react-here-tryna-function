import React, { Component } from 'react';
import UserInput from './Components/UserInput'
import ListOfItems from './Components/ListOfItems'
import TotalCost from './Components/TotalCost'

import './App.css';

const partyThings = [{name: "cerveza", price: 10},
  {name: "handle", price: 20},
  {name: "pizza", price: 10},
  {name: "ice", price: 1},
  {name: "chairs", price: 5},
  {name: "plates", price: 4} ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: null,
      budgetList: [],
      cost: 0
    }
  }

  // method to submit a new form
  handleFormSubmit = (newForm) => {
    // newForm.preventDefault()

    this.setState({form: newForm})
  }

  // create a function that does the math to multiply the number of guests to the item price
  // want to prioritize high items (6-3) before low items (3-1)
  populateList = (form) => {
    let { budgetList, cost } = this.state
    cost = form.guests * 50
    console.log(`cost: ${cost}`)
    // retrieve form.budget and form.guests
    // used parseInt because form submits string values even though the user's input is a number type
    if (parseInt(form.budget) < 50) {
      // console.log(form.budget)
      budgetList = "That ain't it. Can't be broke and have a function."
      this.setState({budgetList: budgetList})
      // console.log(budgetList)
    } else if (parseInt(form.budget) === 50) {
      // based on budget and number of people, add items to the budgetList
      budgetList = "You can afford 1 of everything."
      this.setState({ budgetList: budgetList })
      // console.log(budgetList)
      // this.setState({ budgetList: [...this.state.budgetList, form] })
    } else if (parseInt(form.budget) > cost) {
      budgetList = this.partyThings
      console.log(`list of items: ${budgetList}`)
      this.setState({ budgetList: budgetList, cost: cost })
    }
  }

  render(){
    return (
      <>
        <div id="app">
          <h1>REACT Here, Tryna FUNCTION</h1>
          <UserInput
            handleFormSubmit= {this.handleFormSubmit}
            populateList = { this.populateList }
          />
          <ListOfItems
          partyThings = { this.partyThings }
          budgetList = { this.state.budgetList }
          />
          <TotalCost 
          form = { this.state.form }/>
        </div>
      </>
    );
  }
}

export default App;
