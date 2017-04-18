import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/Figure/store'
import Figure from './Figure'
import ControlPanelContainer from './ControlPanelContainer'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <ControlPanelContainer />
          <Figure legType={{right: 0, left: 1}} position={1} />
        </div>
      </Provider>
    )
  }
})

render(<App />, document.getElementById('app'))
