import React from 'react'
const { bool } = React.PropTypes

const Leg = React.createClass({
  propTypes: {
    reverse: bool
  },
  render () {
    if (this.props.reverse) {
      return (
        <img className='reverse' src='../public/img/leg-straight.png' />
      )
    } else {
      return (
        <img src='../public/img/leg-straight.png' />
      )
    }
  }
})

export default Leg
