import React from 'react'
import '../public/css/Limb.css'
const { string } = React.PropTypes

const Limb = React.createClass({
  propTypes: {
    type: string
  },
  render () {
    return (
      <div className={`limb limb-${this.props.type}`} />
    )
  }
})

export default Limb
