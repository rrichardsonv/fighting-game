import React from 'react'

class Leg extends React.Component {
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
}
const { bool, number } = React.PropTypes
Leg.propTypes = {
  reverse: bool,
  angle: number
}

export default Leg
