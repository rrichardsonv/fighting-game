import React from 'react'
import { connect } from 'react-redux'

class Arm extends React.Component {
  constructor (props) {
    super(props)

    this.handleAngleChange = this.handleAngleChange.bind(this)
  }
  handleAngleChange () {
    let matrix
    let rotate
    if (this.props.reverse) {
      matrix = [-1, -1, -1, 1, 1, 1]
    } else {
      matrix = [1, 1, -1, 1, 1, 1]
    }

    if (this.props.side === 'right') {
      const angle = this.props.rightArmAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 0, 1]
    } else {
      const angle = this.props.leftArmAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 0, 1]
    }
    for (var i = 0; i < 6; i++) {
      matrix[i] = matrix[i] * rotate[i]
    }

    return {
      transform: `matrix(${matrix})`,
      transformOrigin: '0 0'
    }
  }
  render () {
    return (
      <img
        className='limbo'
        style={this.handleAngleChange()}
        src='../public/img/arm.png'
      />
    )
  }
}

const { bool, number, string } = React.PropTypes
Arm.propTypes = {
  reverse: bool,
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
