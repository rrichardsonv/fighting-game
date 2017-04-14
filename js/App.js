import React from 'react'
import { render } from 'react-dom'
import Body from './Body'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <div className='container'>
        <Body />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
