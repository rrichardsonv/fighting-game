import React from 'react'
import '../public/css/Socket.css'
import Limb from './Limb'
const { string } = React.PropTypes

const Socket = React.createClass({
  propTypes: {
    type: string
  },
  render () {
    return (
      <div className={`socket socket-${this.props.type}`}>
        <Limb type={this.props.type} />
      </div>
    )
  }
})

export default Socket
