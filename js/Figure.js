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
        return [false, false, false, false]
      case 0:
        return [false, true, false, true]
      case -1:
        return [true, true, false, false]
      default:
        return [false, true, false, true]
    }
  }

  render () {
    const bodyPosition = this.orientLimbs()
    return (
      <div className='figure'>
        <img className='head' src='../public/img/head.png' />
        <div className='torso-wrapper'>
          <Arm reverse={bodyPosition[0]} />
          <Arm reverse={bodyPosition[1]} />
          <Leg reverse={bodyPosition[2]} />
          <Leg reverse={bodyPosition[3]} />
        </div>
      </div>
    )
  }
}

const { number } = React.PropTypes

Figure.propTypes = {
  position: number
}

export default Figure
