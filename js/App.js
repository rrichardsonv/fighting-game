import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/Figure/store'
import Figure from './Figure'
import AngleController from './AngleController'
import BodyPartPalette from './BodyPartPalette'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <div className='control-panel'>
            <AngleController />
            <BodyPartPalette />
          </div>
          <Figure legType={{right: 0, left: 1}} position={1} />
        </div>
      </Provider>
    )
  }
})

render(<App />, document.getElementById('app'))
