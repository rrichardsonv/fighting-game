import React from 'react'
import { connect } from 'react-redux'

class AngleController extends React.Component {
  render () {
    console.log(this.props.angleHandlers)
    const { leftArm, rightArm, leftLeg, rightLeg } = this.props.angleHandlers
    return (
      <div className='angle-panel'>
        <p>
          <input
            name='left-arm'
            type='range'
            step='15'
            min='-150'
            max='150'
            value={this.props.leftArmAngle}
            onChange={leftArm}
          /><br />
          <input
            name='right-arm'
            type='range'
            step='15'
            min='-150'
            max='150'
            value={this.props.rightArmAngle}
            onChange={rightArm}
          /><br />
          <input
            name='left-leg'
            type='range'
            step='15'
            min='-150'
            max='150'
            value={this.props.leftLegAngle}
            onChange={leftLeg}
          /><br />
          <input
            name='right-leg'
            type='range'
            step='17'
            min='-157'
            max='157'
            value={this.props.rightLegAngle}
            onChange={rightLeg}
          /><br />
        </p>
      </div>
    )
  }
}
const { func, number, shape } = React.PropTypes

AngleController.propTypes = {
  leftArmAngle: number,
  rightArmAngle: number,
  leftLegAngle: number,
  rightLegAngle: number,
  angleHandlers: shape({
    leftArm: func,
    rightArm: func,
    leftLeg: func,
    rightLeg: func
  })
}

const mapStateToProps = (state) => {
  return {
    leftArmAngle: state.leftArmAngle,
    rightArmAngle: state.rightArmAngle,
    leftLegAngle: state.leftLegAngle,
    rightLegAngle: state.rightLegAngle
  }
}

export default connect(mapStateToProps)(AngleController)
