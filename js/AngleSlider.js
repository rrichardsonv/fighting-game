import React from 'react'

class AngleSlider extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    <input
      type='range'
      min='0'
      max='90'
      value={this.props.angle}
    />
  }
}

export default AngleSlider
