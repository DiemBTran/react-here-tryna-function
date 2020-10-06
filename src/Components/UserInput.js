import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)

  this.state = {
    form: {
      guests: "",
      budget: ""
    }
  }
}

handleChange = (e) => {
  const {form} = this.state
    form[e.target.name] = e.target.value
}
handleSubmit = (e) => {
  e.preventDefault()
  this.props.handleFormSubmit(this.state.form)
}


    render(){
        return(
            <>
              <form>
                <label>How many g's are we tryna drop on this thang? Gotta drop atleast a hunnid on it</label>
                <br/>
                <input
                name= "budget"
                type= "number"
                value= {this.state.budget}
                onChange = {this.handleChange} />
                <br/>
                <label>How many of the homies can pull up to the function?</label>
                <br/>
                <input
                name= "guests"
                type= "number"
                value= {this.state.guests}
                onChange= {this.handleChange} />
                <br/>
                <input
                type= "submit"
                value= "Submit"
                onClick={this.handleSubmit} />
              </form>
            </>
        )
    }
}

export default UserInput
