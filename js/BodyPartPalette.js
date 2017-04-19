import React from 'react'
import anatomy from '../public/json/anatomy.json'

class BodyPartPalette extends React.Component {
  constructor (props) {
    super(props)

    this.handlePartSelect = this.handlePartSelect.bind(this)
  }
  handlePartSelect (event) {
    const sendChange = this.props.typeHandlers
    const ev = event.target
    console.log(ev)
    switch (ev.name) {
      case 'head':
        sendChange.head(ev.value)
        break
      case 'left-arm':
        sendChange.leftArm(ev.value)
        break
      case 'right-arm':
        sendChange.rightArm(ev.value)
        break
      case 'left-leg':
        sendChange.leftLeg(ev.value)
        break
      case 'right-leg':
        sendChange.rightLeg(ev.value)
        break
      case 'body-position':
        sendChange.bodyPosition(ev.value)
        break
      default:
        console.log('ERROR')
    }
  }
  render () {
    const { heads, arms, legs, orientations } = anatomy.parts
    return (
      <div className='bodypart-panel'>
        <form>
          <label>{'Head: '}
            <select
              onChange={this.handlePartSelect}
              name='head'
            >
              {heads.map((h) => {
                return (
                  <option value={h.id}>{h.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Left-arm: '}
            <select
              onChange={this.handlePartSelect}
              name='left-arm'
            >
              {arms.map((la) => {
                return (
                  <option value={la.id}>{la.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Right-arm: '}
            <select
              onChange={this.handlePartSelect}
              name='right-arm'
            >
              {arms.map((ra) => {
                return (
                  <option value={ra.id}>{ra.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Left-leg: '}
            <select
              onChange={this.handlePartSelect}
              name='left-leg'
            >
              {legs.map((ll) => {
                return (
                  <option value={ll.id}>{ll.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Right-leg: '}
            <select
              onChange={this.handlePartSelect}
              name='right-leg'
            >
              {legs.map((rl) => {
                return (
                  <option value={rl.id}>{rl.name}</option>
                )
              })}
            </select>
          </label><br />
          <label>{'Body-Orientation: '}
            <select
              onChange={this.handlePartSelect}
              name='body-position'
            >
              {orientations.map((o) => {
                return (
                  <option value={o.id}>{o.name}</option>
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
const { shape, func } = React.PropTypes

BodyPartPalette.propTypes = {
  typeHandlers: shape({
    leftArm: func,
    rightArm: func,
    leftLeg: func,
    rightLeg: func,
    head: func,
    bodyPosition: func
  })
}

export default BodyPartPalette
