import React from "react"

import {Redirect} from "react-router-dom"

class CreateListing extends React.Component {
    constructor(props){
       super(props)
       this.state = {
           form: {
               address: "",
               price: 0
           },
           createSucess: false
       }
   }
   onChange = (e) => {
       const{form} = this.state
       const{name,value} = e.target
       form[name] = value
       this.setState({form})
    }

    localSubmit = () => {
        const{onSubmit} = this.props
        const{form} = this.state
        onSubmit(form).then(() => {
            this.setState({createSucess: true})
        })
    }

    render () {
        const{form, createSucess} = this.state
        const{address, price} = form
        return (
          <React.Fragment>
              {createSucess ? <Redirect to="/listings" />: null}
              <h1>New Listing</h1>
              <div>
                  <label>Address</label>
                  <input name="address" value = {address} onChange = {this.onChange} type = 'text' />
              </div>
              <div>
                <label>Price</label>
                <input name="price" value = {price} onChange = {this.onChange} type = 'number' />
              </div>
              <button onClick={this.localSubmit}>Submit</button>
          </React.Fragment>
        );
    }
}

export default CreateListing
