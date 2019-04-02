import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import BandList from '../components/BandList'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, i) => <BandList key={i} band={band}/>)

  render() {
    // debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

export default connect(
  ({bands}) => ({bands}),
  {addBand: formData => ({type: 'ADD_BAND', band: formData})}
)(BandsContainer)
