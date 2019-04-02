import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleBandChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          name=''
          onChange={this.handleBandChange}
          value={this.state.name}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
