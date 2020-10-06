import React, { Component } from 'react';
import UserInput from './Components/UserInput'
import ListOfItems from './Components/ListOfItems'
import TotalCost from './Components/TotalCost'
import E40 from './Assets/react-here-tryna-function.jpg'
import UncleSam from './Assets/Uncle-Sam.jpg'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: null,
      budgetList: [],
      cost: 0,
      admissionFee: 0,
      message: "",
      budget: 0,
      difference: 0,
      e40: E40,
      uncleSam: UncleSam,
      partyThings: [{name: "cerveza", price: 10},
        {name: "handle", price: 20},
        {name: "pizza", price: 10},
        {name: "ice", price: 1},
        {name: "chairs", price: 5},
        {name: "plates", price: 4} ]
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
    let { budgetList, cost, difference, budget, admissionFee, message } = this.state
    cost = form.guests * 50
    console.log(`cost: ${cost}`)
    // retrieve form.budget and form.guests
    // used parseInt because form submits string values even though the user's input is a number type
    let guestNum = parseInt(form.guests)
    if (parseInt(form.budget) < 50) {
      // console.log(form.budget)
      budget = form.budget
      difference = cost - form.budget
      admissionFee = (difference / form.guests).toFixed(2)
      message = "That ain't it. Can't be broke and have a function."
      this.setState({message: message, cost: cost, budget: budget, difference: difference, admissionFee: admissionFee})
      // console.log(budgetList)
    } else if (parseInt(form.budget) === 50) {
      // based on budget and number of people, add items to the budgetList
      budget = form.budget
      message = "You can afford 1 of everything."
      difference = cost - form.budget
      admissionFee = (difference / form.guests).toFixed(2)
      this.setState({ message: message, cost: cost, budget: budget, difference: difference })
      // console.log(budgetList)
      // this.setState({ budgetList: [...this.state.budgetList, form] })
    } else if (parseInt(form.budget) >= cost) {
      budget = form.budget
      cost = form.guests * 50
      budgetList.push(guestNum * 10)
      budgetList.push(guestNum * 20)
      budgetList.push(guestNum * 10)
      budgetList.push(guestNum * 1)
      budgetList.push(guestNum * 5)
      budgetList.push(guestNum * 4)
      difference = cost - form.budget
      admissionFee = (difference / form.guests).toFixed(2)
      this.setState({ budgetList: budgetList, cost: cost, budget: budget })
      }
      // console.log(`list of items: ${budgetList}`)
      else if (parseInt(form.budget) < cost) {
        budget = form.budget
        cost = form.guests * 50
        budgetList.push(guestNum * 10)
        budgetList.push(guestNum * 20)
        budgetList.push(guestNum * 10)
        budgetList.push(guestNum * 1)
        budgetList.push(guestNum * 5)
        budgetList.push(guestNum * 4)
        difference = cost - form.budget
        admissionFee = (difference / form.guests).toFixed(2)
        this.setState({ budgetList: budgetList, cost: cost, difference: difference, budget: budget, admissionFee: admissionFee })
      }
  }

  render(){
    return (
      <>
        <div id="app">
          <h1>REACT Here, Tryna FUNCTION</h1>
          <img src= {this.state.e40}/>
          <UserInput
            handleFormSubmit= {this.handleFormSubmit}
            populateList = { this.populateList }
          />
          {this.state.form &&
            <div id= "flexContainer">
              <ListOfItems
              id= "budgetList"
              budgetList = { this.state.budgetList }
              message = {this.state.message}
              form = { this.state.form }
              />
              <TotalCost
              id= "cost"
              difference = {this.state.difference}
              form = { this.state.form }
              budget = {this.state.budget}
              cost = {this.state.cost}
              admissionFee = {this.state.admissionFee}
              uncleSam = {this.state.uncleSam}
              />
              </div>
            }
        </div>
      </>
    );
  }
}

export default App;
