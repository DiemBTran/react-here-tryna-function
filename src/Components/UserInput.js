import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
// creating state to hold form information
  this.state = {
    form: {
      guests: "",
      budget: ""
    }
  }
}
//this handleChange holds the values from each form
handleChange = (e) => {
  const {form} = this.state
    form[e.target.name] = e.target.value
}
//this handleSubmit will run populateList and handleFormSubmit upon click
handleSubmit = (e) => {
  e.preventDefault()
  this.props.populateList(this.state.form)
  this.props.handleFormSubmit(this.state.form)
}

    render(){
        return(
            <>
              {/*this form collects guest count and budget from the user*/}
              <form>
                <label id= "label1">How many g's are we tryna drop on this thang? Gotta drop at least fiddy on it, about that green like wasabi.</label>
                <br/>
                <br/>
                <input
                  id= "budget"
                  name= "budget"
                  type= "number"
                  value= {this.state.budget}
                  onChange = {this.handleChange} />
                <br/>
                <br/>
                <label id= "label2">How many of the homies can pull up to the function?</label>
                <br/>
                <br/>
                <input
                  id= "guests"
                  name= "guests"
                  type= "number"
                  value= {this.state.guests}
                  onChange= {this.handleChange} />
                <br/>
                <br/>
                {/* submit button */}
                <input
                  id= "button"
                  type= "submit"
                  value= "Aye G try THIS"
                  onClick={this.handleSubmit} />
                {/* restart button */}
                <button onClick={this.props.restartButton}>Run it BACK</button>
              </form>
            </>
        )
    }
}

export default UserInput
