import React from 'react'
import { connect } from 'react-redux'

class Leg extends React.Component {
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
      const angle = this.props.rightLegAngle
      rotate = [Math.cos(angle), Math.sin(angle), Math.sin(angle), Math.cos(angle), 0, 1]
    } else {
      const angle = this.props.leftLegAngle
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
        src='../public/img/leg-straight.png'
      />
    )
  }
}
const { bool, number, string } = React.PropTypes
Leg.propTypes = {
  reverse: bool,
  leftLegAngle: number,
  rightLegAngle: number,
  side: string
}
const mapStateToProps = (state) => {
  return {
    leftLegAngle: state.leftLegAngle,
    rightLegAngle: state.rightLegAngle
  }
}

export default connect(mapStateToProps)(Leg)
