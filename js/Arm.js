import React from 'react'
const { bool } = React.PropTypes

const Arm = React.createClass({
  propTypes: {
    reverse: bool
  },
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
})

export default Arm
