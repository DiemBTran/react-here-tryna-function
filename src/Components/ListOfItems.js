import React, { Component } from 'react'

class ListOfItems extends Component {
  constructor(props){
    super(props)
  }

// example: {item.name = pizza} x {guests:10}: {mathFunction => $100}

// "pizzas x 10: $100"

  render(){
    // let {budgetList, form} = this.props
    return(
      <>
      <div>
        <h2>You betta bring: </h2>
        <h4>{this.props.message !== "" ? this.props.message: ""}
        </h4>
          {this.props.message === "" &&
          <ul>
              <li> cerveza = ${this.props.budgetList[0]} </li>
              <li> handle = ${this.props.budgetList[1]} </li>
              <li> pizza = ${this.props.budgetList[2]} </li>
              <li> ice = ${this.props.budgetList[3]} </li>
              <li> chairs = ${this.props.budgetList[4]} </li>
              <li> plates = ${this.props.budgetList[5]} </li>
              </ul>}
        </div>
      </>
    )
  }
}

export default ListOfItems
