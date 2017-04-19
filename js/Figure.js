import React from 'react'
import { connect } from 'react-redux'
import '../public/css/Figure.css'
import Arm from './Arm'
import Leg from './Leg'
import Head from './Head'

class Figure extends React.Component {
  constructor (props) {
    super(props)
    console.log('Check out my figure!')
  }
  orientLimbs () {
    const pos = this.props.bodyPosition
    switch (pos) {
      case 0:
        return {
          reverse: [false, false, false, false],
          xOffset: [0, 0, 0, 0]
        }
      case 1:
        return {
          reverse: [false, true, true, false],
          xOffset: [0, -40, 50, 0]
        }
      case 2:
        return {
          reverse: [true, true, true, true],
          xOffset: [40, -40, 60, -40]
        }
      default:
        return {
          reverse: [false, true, true, false],
          xOffset: [0, -40, 50, 0]
        }
    }
  }
  render () {
    const limbs = this.orientLimbs()
    const reverse = limbs.reverse
    const xOffset = limbs.xOffset
    return (
      <div className='figure'>
        <Head headType={this.props.headType} />
        <div className='torso-wrapper'>
          <Arm
            side='left'
            xOffset={xOffset[0]}
            reverse={reverse[0]}
            armType={this.props.leftArmType}
          />
          <Arm
            side='right'
            xOffset={xOffset[1]}
            reverse={reverse[1]}
            armType={this.props.rightArmType}
          />
          <Leg
            side='left'
            legType={this.props.leftLegType}
            xOffset={xOffset[2]}
            reverse={reverse[2]}
          />
          <Leg
            side='right'
            legType={this.props.rightLegType}
            xOffset={xOffset[3]}
            reverse={reverse[3]}
          />
        </div>
      </div>
    )
  }
}

const { number } = React.PropTypes

Figure.propTypes = {
  bodyPosition: number,
  leftLegType: number,
  rightLegType: number,
  rightArmType: number,
  leftArmType: number,
  headType: number
}

const mapStateToProps = (state) => {
  return {
    bodyPosition: state.bodyPosition,
    rightLegType: state.rightLegType,
    leftLegType: state.leftLegType,
    rightArmType: state.rightArmType,
    leftArmType: state.leftArmType,
    headType: state.headType
  }
}

export default connect(mapStateToProps)(Figure)
