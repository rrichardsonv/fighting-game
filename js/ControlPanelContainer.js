import React from 'react'
import { connect } from 'react-redux'
import ControlPanel from './ControlPanel'
import { setLeftArmAngle, setRightArmAngle, setLeftLegAngle, setRightLegAngle, setLeftArmType, setRightArmType, setLeftLegType, setRightLegType, setHeadType, setBodyPosition } from './redux/Figure/actionCreators'

class ControlPanelContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleRightLegAngleChange = this.handleRightLegAngleChange.bind(this)
    this.handleLeftLegAngleChange = this.handleLeftLegAngleChange.bind(this)
    this.handleLeftArmAngleChange = this.handleLeftArmAngleChange.bind(this)
    this.handleRightArmAngleChange = this.handleRightArmAngleChange.bind(this)
    this.handleLeftArmTypeChange = this.handleLeftArmTypeChange.bind(this)
    this.handleRightArmTypeChange = this.handleRightArmTypeChange.bind(this)
    this.handleLeftLegTypeChange = this.handleLeftLegTypeChange.bind(this)
    this.handleRightLegTypeChange = this.handleRightLegTypeChange.bind(this)
    this.handleHeadTypeChange = this.handleHeadTypeChange.bind(this)
    this.handleBodyPositionChange = this.handleBodyPositionChange.bind(this)
    this.angleHandlers = this.angleHandlers.bind(this)
    this.typeHandlers = this.typeHandlers.bind(this)
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
  angleHandlers () {
    return ({
      leftArm: this.handleLeftArmAngleChange,
      rightArm: this.handleRightArmAngleChange,
      leftLeg: this.handleLeftLegAngleChange,
      rightLeg: this.handleRightLegAngleChange
    })
  }
  handleLeftArmTypeChange (newValue) {
    let type = parseInt(newValue)
    this.props.dispatch(setLeftArmType(type))
  }
  handleRightArmTypeChange (newValue) {
    let type = parseInt(newValue)
    this.props.dispatch(setRightArmType(type))
  }
  handleLeftLegTypeChange (newValue) {
    console.log(newValue)
    let type = parseInt(newValue)
    this.props.dispatch(setLeftLegType(type))
  }
  handleRightLegTypeChange (newValue) {
    let type = parseInt(newValue)
    this.props.dispatch(setRightLegType(type))
  }
  handleHeadTypeChange (newValue) {
    let type = parseInt(newValue)
    this.props.dispatch(setHeadType(type))
  }
  handleBodyPositionChange (newValue) {
    let pos = parseInt(newValue)
    this.props.dispatch(setBodyPosition(pos))
  }
  typeHandlers () {
    return ({
      leftArm: this.handleLeftArmTypeChange,
      rightArm: this.handleRightArmTypeChange,
      leftLeg: this.handleLeftLegTypeChange,
      rightLeg: this.handleRightLegTypeChange,
      head: this.handleHeadTypeChange,
      bodyPosition: this.handleBodyPositionChange
    })
  }
  render () {
    const angleFuncs = this.angleHandlers()
    const typeFuncs = this.typeHandlers()
    return (
      <ControlPanel
        angleHandlers={angleFuncs}
        typeHandlers={typeFuncs}
      />
    )
  }
}
const { func, number } = React.PropTypes

ControlPanelContainer.propTypes = {
  dispatch: func,
  leftArmAngle: number,
  rightArmAngle: number,
  leftLegAngle: number,
  rightLegAngle: number,
  leftArmType: number,
  rightArmType: number,
  leftLegType: number,
  rightLegType: number,
  headType: number,
  bodyPosition: number
}

const mapStateToProps = (state) => {
  return {
    leftArmAngle: state.leftArmAngle,
    rightArmAngle: state.rightArmAngle,
    leftLegAngle: state.leftLegAngle,
    rightLegAngle: state.rightLegAngle,
    leftArmType: state.leftArmType,
    rightArmType: state.rightArmType,
    leftLegType: state.leftLegType,
    rightLegType: state.rightLegType,
    headType: state.headType,
    bodyPosition: state.bodyPosition
  }
}

export default connect(mapStateToProps)(ControlPanelContainer)
