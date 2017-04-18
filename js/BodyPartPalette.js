import React from 'react'
import { connect } from 'react-redux'
import anatomy from '../public/json/anatomy.json'

class BodyPartPalette extends React.Component {
  render () {
    const { heads, arms, legs } = anatomy.parts
    return (
      <div className='bodypart-panel'>
        <form>
          <label>{'Head: '}
            <select name='head'>
              {heads.map((h) => {
                return (
                  <option value={h.id}>{h.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Left-arm: '}
            <select name='left-arm'>
              {arms.map((la) => {
                return (
                  <option value={la.id}>{la.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Right-arm: '}
            <select name='right-arm'>
              {arms.map((ra) => {
                return (
                  <option value={ra.id}>{ra.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Left-leg: '}
            <select name='left-leg'>
              {legs.map((ll) => {
                return (
                  <option value={ll.id}>{ll.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Right-leg: '}
            <select name='right-leg'>
              {legs.map((rl) => {
                return (
                  <option value={rl.id}>{rl.name}</option>
                )
              })}
            </select>
          </label><br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
const { func, number } = React.PropTypes

BodyPartPalette.propTypes = {
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

export default connect(mapStateToProps)(BodyPartPalette)
