import React from 'react'
import { connect } from 'react-redux'
import { setLeftArmAngle, setRightArmAngle, setLeftLegAngle, setRightLegAngle } from './redux/Figure/actionCreators'

class AngleController extends React.Component {
  constructor (props) {
    super(props)

    this.handleRightLegAngleChange = this.handleRightLegAngleChange.bind(this)
    this.handleLeftLegAngleChange = this.handleLeftLegAngleChange.bind(this)
    this.handleLeftArmAngleChange = this.handleLeftArmAngleChange.bind(this)
    this.handleRightArmAngleChange = this.handleRightArmAngleChange.bind(this)
  }
  handleLeftArmAngleChange (event) {
    let angle = parseInt(event.target.value) / 100
    this.props.dispatch(setLeftArmAngle(angle))
  }
  handleRightArmAngleChange (event) {
    let angle = parseInt(event.target.value) / 100
    this.props.dispatch(setRightArmAngle(angle))
  }
  handleLeftLegAngleChange (event) {
    let angle = parseInt(event.target.value) / 100
    this.props.dispatch(setLeftLegAngle(angle))
  }
  handleRightLegAngleChange (event) {
    let angle = parseInt(event.target.value) / 100
    this.props.dispatch(setRightLegAngle(angle))
  }
  render () {
    const { leftArmAngle, rightArmAngle, leftLegAngle, rightLegAngle } = this.props
    return (
      <div className='control-panel'>
        <input
          name='left-arm'
          type='range'
          step='15'
          min='-150'
          max='150'
          value={leftArmAngle}
          onChange={this.handleLeftArmAngleChange}
        />
        <input
          name='right-arm'
          type='range'
          step='15'
          min='-150'
          max='150'
          value={rightArmAngle}
          onChange={this.handleRightArmAngleChange}
        />
        <input
          name='left-leg'
          type='range'
          step='15'
          min='-150'
          max='150'
          value={leftLegAngle}
          onChange={this.handleLeftLegAngleChange}
        />
        <input
          name='right-leg'
          type='range'
          step='17'
          min='-157'
          max='157'
          value={rightLegAngle}
          onChange={this.handleRightLegAngleChange}
        />
      </div>
    )
  }
}
const { func, number } = React.PropTypes

AngleController.propTypes = {
  leftArmAngle: number,
  rightArmAngle: number,
  leftLegAngle: number,
  rightLegAngle: number,
  dispatch: func
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
