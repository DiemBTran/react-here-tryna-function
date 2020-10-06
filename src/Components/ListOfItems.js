import React, { Component } from 'react'

class ListOfItems extends Component {

// example: {item.name = pizza} x {guests:10}: {mathFunction => $100}

// "pizzas x 10: $100"

  render(){
    return(
      <>
        <h2>You betta bring: </h2>
        <ul>
          {/* budgetList will be created through populatedList function
          Line 16 - the map is going through all the items from the budgetList and displaying for the user */}
          { this.props.budgetList }
        </ul>
      </>
    )
  }
}

export default ListOfItems