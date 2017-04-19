import React from 'react'
import anatomy from '../public/json/anatomy.json'

class Head extends React.Component {

  render () {
    const { img, style } = anatomy.parts.heads[this.props.headType]
    return (
      <img
        className={`head ${style}`}
        src={`../public/img/${img}.png`}
      />
    )
  }
}

const { number } = React.PropTypes

Head.propTypes = {
  headType: number
}

export default Head
