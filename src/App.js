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
      //This state will hold form. It begins as null bc it's unpopulated.
      form: null,
      //This state will hold the total cost of each party item in an array that we can output in ListOfItems.js
      budgetList: [],
      //This state will hold the total cost of the party, which is determined by guest count * price per person
      cost: 0,
      //This state will hold admission fees per person if the party is over budget
      admissionFee: 0,
      //We have a state for special messages if you are right at $50 or less
      message: "",
      //This state hold the budget given by the user in the form
      budget: 0,
      //This state is the difference between budget and cost
      difference: 0,
      //The next two states are images
      e40: E40,
      uncleSam: UncleSam,
      //This object holds each party item and individual price
      partyThings: [{ name: "cerveza", price: 10 },
      { name: "handle", price: 20 },
      { name: "pizza", price: 10 },
      { name: "ice", price: 1 },
      { name: "chairs", price: 5 },
      { name: "plates", price: 4 }]
    }
  }

  // method to submit a new form
  handleFormSubmit = (newForm) => {
    // newForm.preventDefault()
    this.setState({ form: newForm })
  }

  restartButton = () => {
    window.location.reload()
  }

  // create a function that does the math to multiply the number of guests to the item price
  populateList = (form) => {
    //destructuring state
    let { budgetList, cost, difference, budget, admissionFee, message } = this.state
    // the cost of each guest's supplies are $50
    cost = form.guests * 50
    //console.log(`cost: ${cost}`)
    // retrieve form.budget and form.guests
    // used parseInt because form submits string values even though the user's input is a number type
    let guestNum = parseInt(form.guests)
    if (parseInt(form.budget) < 50) {
      // console.log(form.budget)
      //setting state for budget to take in values from form
      budget = form.budget
      //if the party is overbudget, you have a difference you need to fund for
      difference = cost - form.budget
      //if the party is overbudget, you must charge guest's admission fees
      admissionFee = (difference / form.guests).toFixed(2)
      //you have to have at least $50 to have the utmost basic party
      message = "That ain't it. Can't be broke and have a function."
      this.setState({ message: message, cost: cost, budget: budget, difference: difference, admissionFee: admissionFee })
      // console.log(budgetList)
    } else if (parseInt(form.budget) === 50) {
      budget = form.budget
      // if you are really on a budget,  you can have the minimum needed for a solo party
      message = "You can afford 1 of everything."
      difference = cost - form.budget
      admissionFee = (difference / form.guests).toFixed(2)
      this.setState({ message: message, cost: cost, budget: budget, difference: difference })
      // console.log(budgetList)
      // this.setState({ budgetList: [...this.state.budgetList, form] })
      // based on budget and number of people, add items to the budgetList
    } else if (parseInt(form.budget) >= cost) {
      budget = form.budget
      cost = form.guests * 50
      //pushing the cost of each individual item in to the budgetList array
      budgetList.push(guestNum * 10)
      budgetList.push(guestNum * 20)
      budgetList.push(guestNum * 10)
      budgetList.push(guestNum * 1)
      budgetList.push(guestNum * 5)
      budgetList.push(guestNum * 4)
      difference = cost - form.budget
      //rounding to the nearest 2 decimal points for cents
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

  render() {
    return (
      <>
        <div id="app">
          <h1>REACT Here, Tryna FUNCTION</h1>
          <a href = "https://youtu.be/stbkKYs65Lo?t=20" target="_blank"><h5>click here to bump some tunes</h5></a> 
          <img
          src={this.state.e40} />
          <UserInput
            handleFormSubmit={this.handleFormSubmit}
            populateList={this.populateList}
            restartButton = {this.restartButton}
          />
          {/*a condiational render so that the message will only show once all the information is added*/}
          {this.state.form &&
            <div id="flexContainer">
              <ListOfItems
                id="budgetList"
                budgetList={this.state.budgetList}
                message={this.state.message}
                form={this.state.form}
              />
              <TotalCost
                id="cost"
                difference={this.state.difference}
                form={this.state.form}
                budget={this.state.budget}
                cost={this.state.cost}
                admissionFee={this.state.admissionFee}
                uncleSam={this.state.uncleSam}
              />
            </div>
          }
        </div>
      </>
    );
  }
}

export default App;
