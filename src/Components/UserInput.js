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
  this.props.populateList(this.state.form)
  this.props.handleFormSubmit(this.state.form)
}


    render(){
        return(
            <>
              <form>
                <label>How many g's are we tryna drop on this thang? Gotta drop at least fiddy on it, about that green like wasabi.</label>
                <br/>
                <br/>
                <input
                name= "budget"
                type= "number"
                value= {this.state.budget}
                onChange = {this.handleChange} />
                <br/>
                <br/>
                <label>How many of the homies can pull up to the function?</label>
                <br/>
                <br/>
                <input
                name= "guests"
                type= "number"
                value= {this.state.guests}
                onChange= {this.handleChange} />
                <br/>
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
