import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/Figure/store'
import Figure from './Figure'
import AngleController from './AngleController'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <AngleController />
          <Figure position={1} />
          <Figure position={0} />
          <Figure position={-1} />
        </div>
      </Provider>
    )
  }
})

render(<App />, document.getElementById('app'))
