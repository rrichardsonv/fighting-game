import React from 'react'

class Arm extends React.Component {
  render () {
    if (this.props.reverse) {
      return (
        <img className='reverse' src='../public/img/arm.png' />
      )
    } else {
      return (
        <img src='../public/img/arm.png' />
      )
    }
  }
}

const { bool, number } = React.PropTypes
Arm.propTypes = {
  reverse: bool,
  angle: number
}

export default Arm
