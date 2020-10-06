import React, { Component } from 'react';

class TotalCost extends Component {
  constructor(props){
    super(props)
  }

    // budgetCheck = (form) => {
    //     if(form.budget === )
    // }

    render() {
        return(
            <>
            <div>
              <h2>What's the damage?</h2>
              {this.props.message === "" ||
              <div>
                <p>Budget: {this.props.budget}</p>
                <p>Cost: {this.props.cost}</p>
                <p>Difference: {this.props.difference}</p>
                <br/>
                <p>
                You gotta tax each person ${this.props.admissionFee} on cashApp before they can be added to your guest list
                </p>
                <img src= {this.props.uncleSam}
                style= {{height: "50 px"}}/>
              </div>
            }
            </div>
            </>
        )
    }
}

export default TotalCost
