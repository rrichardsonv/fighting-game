import { SET_LEFT_ARM_ANGLE, SET_RIGHT_ARM_ANGLE, SET_RIGHT_LEG_ANGLE, SET_LEFT_LEG_ANGLE, SET_LEFT_ARM_TYPE, SET_RIGHT_ARM_TYPE, SET_LEFT_LEG_TYPE, SET_RIGHT_LEG_TYPE, SET_HEAD_TYPE, SET_BODY_POSITION } from './actions'

export function setLeftArmAngle (leftArmAngle) {
  return {type: SET_LEFT_ARM_ANGLE, leftArmAngle}
}
export function setRightArmAngle (rightArmAngle) {
  return {type: SET_RIGHT_ARM_ANGLE, rightArmAngle}
}
export function setLeftLegAngle (leftLegAngle) {
  return {type: SET_LEFT_LEG_ANGLE, leftLegAngle}
}
export function setRightLegAngle (rightLegAngle) {
  return {type: SET_RIGHT_LEG_ANGLE, rightLegAngle}
}
export function setLeftArmType (leftArmType) {
  return {type: SET_LEFT_ARM_TYPE, leftArmType}
}
export function setRightArmType (rightArmType) {
  return {type: SET_RIGHT_ARM_TYPE, rightArmType}
}
export function setLeftLegType (leftLegType) {
  return {type: SET_LEFT_LEG_TYPE, leftLegType}
}
export function setRightLegType (rightLegType) {
  return {type: SET_RIGHT_LEG_TYPE, rightLegType}
}
export function setHeadType (headType) {
  return {type: SET_HEAD_TYPE, headType}
}
export function setBodyPosition (bodyPosition) {
  return {type: SET_BODY_POSITION, bodyPosition}
}
