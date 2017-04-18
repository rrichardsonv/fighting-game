import { SET_LEFT_ARM_ANGLE, SET_RIGHT_ARM_ANGLE, SET_RIGHT_LEG_ANGLE, SET_LEFT_LEG_ANGLE } from './actions'

const DEFAULT_STATE = {
  leftArmAngle: 0,
  rightArmAngle: 0,
  leftLegAngle: 0,
  rightLegAngle: 0
}

const setLeftArmAngle = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {leftArmAngle: action.leftArmAngle})
  return newState
}

const setRightArmAngle = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {rightArmAngle: action.rightArmAngle})
  return newState
}

const setLeftLegAngle = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {leftLegAngle: action.leftLegAngle})
  return newState
}

const setRightLegAngle = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {rightLegAngle: action.rightLegAngle})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LEFT_ARM_ANGLE:
      return setLeftArmAngle(state, action)
    case SET_RIGHT_ARM_ANGLE:
      return setRightArmAngle(state, action)
    case SET_RIGHT_LEG_ANGLE:
      return setRightLegAngle(state, action)
    case SET_LEFT_LEG_ANGLE:
      return setLeftLegAngle(state, action)
    default:
      return state
  }
}

export default rootReducer
