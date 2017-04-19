import React from 'react'
import { connect } from 'react-redux'
import '../public/css/Leg.css'
import anatomy from '../public/json/anatomy.json'

class Leg extends React.Component {
  constructor (props) {
    super(props)

    this.handleAngleChange = this.handleAngleChange.bind(this)
  }
  handleAngleChange (pivot, wideOffset) {
    let rotate
    let matrix = this.props.reverse ? [-1, -1, -1, 1, this.props.xOffset, 0] : [1, 1, -1, 1, this.props.xOffset, 1]
    if (this.props.side === 'right') {
      const angle = this.props.rightLegAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 1, 1]
    } else {
      matrix[4] += this.props.reverse && wideOffset ? wideOffset : 0
      const angle = this.props.leftLegAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 1, 1]
    }
    for (var i = 0; i < 6; i++) {
      matrix[i] = matrix[i] * rotate[i]
    }
    console.log(pivot)
    return {
      transform: `matrix(${matrix})`,
      transformOrigin: `${pivot || this.props.side} top`
    }
  }
  render () {
    const { img, style, pivot, offset } = anatomy.parts.legs[this.props.legType]
    return (
      <img
        className={`leg ${style}`}
        style={this.handleAngleChange(pivot, offset)}
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
