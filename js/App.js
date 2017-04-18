import React from 'react'
import { render } from 'react-dom'
import Figure from './Figure'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Figure position={1} />
        <Figure position={0} />
        <Figure position={-1} />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
