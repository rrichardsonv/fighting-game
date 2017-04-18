import { SET_LEFT_ARM_ANGLE, SET_RIGHT_ARM_ANGLE, SET_RIGHT_LEG_ANGLE, SET_LEFT_LEG_ANGLE, SET_LEFT_ARM_TYPE, SET_RIGHT_ARM_TYPE, SET_LEFT_LEG_TYPE, SET_RIGHT_LEG_TYPE, SET_HEAD_TYPE, SET_BODY_POSITION } from './actions'

const DEFAULT_STATE = {
  leftArmAngle: 0,
  rightArmAngle: 0,
  leftLegAngle: 0,
  rightLegAngle: 0,
  leftArmType: 0,
  rightArmType: 0,
  leftLegType: 0,
  rightLegType: 0,
  headType: 0,
  bodyPosition: 0
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
const setLeftArmType = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {leftArmType: action.leftArmType})
  return newState
}

const setRightArmType = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {rightArmType: action.rightArmType})
  return newState
}

const setLeftLegType = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {leftLegType: action.leftLegType})
  return newState
}

const setRightLegType = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {rightLegType: action.rightLegType})
  return newState
}
const setHeadType = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {headType: action.headType})
  return newState
}
const setBodyPosition = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {bodyPosition: action.bodyPosition})
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
    case SET_LEFT_ARM_TYPE:
      return setLeftArmType(state, action)
    case SET_RIGHT_ARM_TYPE:
      return setRightArmType(state, action)
    case SET_RIGHT_LEG_TYPE:
      return setRightLegType(state, action)
    case SET_LEFT_LEG_TYPE:
      return setLeftLegType(state, action)
    case SET_HEAD_TYPE:
      return setHeadType(state, action)
    case SET_BODY_POSITION:
      return setBodyPosition(state, action)
    default:
      return state
  }
}

export default rootReducer
