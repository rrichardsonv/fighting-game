import { SET_LEFT_ARM_ANGLE, SET_RIGHT_ARM_ANGLE, SET_RIGHT_LEG_ANGLE, SET_LEFT_LEG_ANGLE } from './actions'

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
