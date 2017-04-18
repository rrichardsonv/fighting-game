import React from 'react'
import { connect } from 'react-redux'

class BodyPartPalette extends React.Component {
  render () {
    return (
      <div className='bodypart-panel'>
        <form>
          <label>{'Head: '}
            <select name='head'>
              <option value='1'>Old Man</option>
              <option value='2'>Value 2</option>
              <option value='3'>Value 3</option>
            </select>
          </label><br />
          <label>{'Left-arm: '}
            <select name='left-arm'>
              <option value='1'>Buff</option>
              <option value='2'>Crab</option>
            </select>
          </label><br />
          <label>{'Right-arm: '}
            <select name='right-arm'>
              <option value='1'>Buff</option>
              <option value='2'>Crab</option>
            </select>
          </label><br />
          <label>{'Left-leg: '}
            <select name='left-leg'>
              <option value='1'>Straight</option>
              <option value='2'>Bent</option>
            </select>
          </label><br />
          <label>{'Right-leg: '}
            <select name='right-leg'>
              <option value='1'>Straight</option>
              <option value='2'>Bent</option>
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
