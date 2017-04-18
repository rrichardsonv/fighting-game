import React from 'react'
import { connect } from 'react-redux'
import '../public/css/Leg.css'
import anatomy from '../public/json/anatomy.json'

class Leg extends React.Component {
  constructor (props) {
    super(props)

    this.handleAngleChange = this.handleAngleChange.bind(this)
  }
  handleAngleChange () {
    let matrix
    let rotate
    if (this.props.reverse) {
      matrix = [-1, -1, -1, 1, this.props.xOffset, 0]
    } else {
      matrix = [1, 1, -1, 1, this.props.xOffset, 1]
    }

    if (this.props.side === 'right') {
      const angle = this.props.rightLegAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 1, 1]
    } else {
      const angle = this.props.leftLegAngle
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
    const { img, style } = anatomy.parts.legs[this.props.legType]
    return (
      <img
        className={`leg ${style}`}
        style={this.handleAngleChange()}
        src={`../public/img/${img}.png`}
      />
    )
  }
}
const { bool, number, string } = React.PropTypes
Leg.propTypes = {
  xOffset: number,
  reverse: bool,
  leftLegAngle: number,
  rightLegAngle: number,
  side: string,
  legType: number
}
const mapStateToProps = (state) => {
  return {
    leftLegAngle: state.leftLegAngle,
    rightLegAngle: state.rightLegAngle
  }
}

export default connect(mapStateToProps)(Leg)
