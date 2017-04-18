import React from 'react'
import '../public/css/Body.css'
import Limb from './Limb'
const { object } = React.PropTypes

const Body = React.createClass({
  propTypes: {
    rightArm: object,
    leftArm: object,
    leftLeg: object,
    rightLeg: object
  },
  render () {
    const { rightArm, leftArm, leftLeg, rightLeg } = this.props
    return (
      <div className='body'>
        <div className='head main-trunk' />
        <div className='torso main-trunk' />
        <Limb anatomy={leftArm} />
        <Limb anatomy={rightArm} />
        <Limb anatomy={leftLeg} />
        <Limb anatomy={rightLeg} />
      </div>
    )
  }
})

export default Body
