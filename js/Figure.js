import React from 'react'
import '../public/css/Figure.css'
import Arm from './Arm'
import Leg from './Leg'

class Figure extends React.Component {
  constructor (props) {
    super(props)
    console.log('Check out my figure!')
  }

  orientLimbs () {
    const pos = this.props.position
    switch (pos) {
      case 1:
        return {
          reverse: [false, false, false, false],
          xOffset: [0, 0, 0, 0]
        }
      case 0:
        return {
          reverse: [false, true, true, false],
          xOffset: [0, -40, 50, 0]
        }
      case -1:
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
  pickLegs (side) {
    const legs = this.props.legType ? this.props.legType[side] : 'default'
    switch (legs) {
      case 0:
        return {img: 'leg-straight', style: 'tall-limb'}
      case 1:
        return {img: 'leg-bent', style: 'wide-limb'}
      default:
        return {img: 'leg-straight', style: 'tall-limb'}
    }
  }
  render () {
    const limbs = this.orientLimbs()
    const reverse = limbs.reverse
    const xOffset = limbs.xOffset
    return (
      <div className='figure'>
        <img className='head tall-limb' src='../public/img/head.png' />
        <div className='torso-wrapper'>
          <Arm side='left' xOffset={xOffset[0]} reverse={reverse[0]} />
          <Arm side='right' xOffset={xOffset[1]} reverse={reverse[1]} />
          <Leg
            side='left'
            legType={this.pickLegs('left')}
            xOffset={xOffset[2]}
            reverse={reverse[2]}
          />
          <Leg
            side='right'
            legType={this.pickLegs('right')}
            xOffset={xOffset[3]}
            reverse={reverse[3]}
          />
        </div>
      </div>
    )
  }
}

const { number, shape } = React.PropTypes

Figure.propTypes = {
  position: number,
  legType: shape({
    right: number,
    left: number
  })
}

export default Figure
