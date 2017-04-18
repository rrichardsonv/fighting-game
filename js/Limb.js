import React from 'react'
import '../public/css/Limb.css'
const { shape, string, number, arrayOf } = React.PropTypes

const Limb = React.createClass({
  propTypes: {
    anatomy: shape({
      type: string,
      side: string,
      angle: number,
      position: arrayOf(number)
    })
  },
  styleLimbs () {
    const { type, side, angle, position } = this.props.anatomy
    let style = {transform: `rotate(${angle}deg)`}
    if (type === 'leg') {
      style.top = `${position[1]}px`
    } else {
      style.bottom = `${position[1]}px`
    }
    console.log(style)
    if (side === 'right') {
      style.left = `${position[0]}px`
    } else {
      style.right = `${position[0]}px`
    }
    return style
  },
  render () {
    const { side, type } = this.props.anatomy
    return (
      <div
        style={this.styleLimbs()}
        className={`limb limb-${side}-${type} ${type}`}
      />
    )
  }
})

export default Limb
