import React from 'react'
import '../public/css/Body.css'
import Socket from './Socket'

const Body = React.createClass({
  render () {
    return (
      <div className='body'>
        <Socket type='head' />
        <Socket type='right-arm' />
        <Socket type='left-arm' />
        <div className='torso' />
        <Socket type='right-leg' />
        <Socket type='left-leg' />
      </div>
    )
  }
})

export default Body
