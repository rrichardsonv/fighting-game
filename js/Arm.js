import React from 'react'
import { connect } from 'react-redux'
import '../public/css/Arm.css'
import anatomy from '../public/json/anatomy.json'

class Arm extends React.Component {
  handleAngleChange (pivot) {
    let matrix
    let rotate
    if (this.props.reverse) {
      matrix = [-1, -1, -1, 1, this.props.xOffset, 0]
    } else {
      matrix = [1, 1, -1, 1, this.props.xOffset, 1]
    }

    if (this.props.side === 'right') {
      const angle = this.props.rightArmAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 1, 1]
    } else {
      const angle = this.props.leftArmAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 1, 1]
    }
    for (var i = 0; i < 6; i++) {
      matrix[i] = matrix[i] * rotate[i]
    }

    return {
      transform: `matrix(${matrix})`,
      transformOrigin: `${this.props.side} top`
    }
  }
  render () {
    const { img, style, pivot } = anatomy.parts.arms[this.props.armType]
    return (
      <img
        className={`arm ${style}`}
        style={this.handleAngleChange(pivot)}
        src={`../public/img/${img}.png`}
      />
    )
  }
}

const { bool, number, string } = React.PropTypes
Arm.propTypes = {
  xOffset: number,
  reverse: bool,
  armType: number,
  leftArmAngle: number,
  rightArmAngle: number,
  side: string
}

const mapStateToProps = (state) => {
  return {
    leftArmAngle: state.leftArmAngle,
    rightArmAngle: state.rightArmAngle
  }
}

export default connect(mapStateToProps)(Arm)
