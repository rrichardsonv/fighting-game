import React from 'react'
import { render } from 'react-dom'
import Body from './Body'
import '../public/css/normalize.css'

const ClientApp = React.createClass({
  hooray () {
    return [{
      type: 'arm',
      side: 'right',
      angle: -135,
      position: [73, 150]
    }, {
      type: 'arm',
      side: 'left',
      angle: 135,
      position: [73, 150]
    }, {
      type: 'leg',
      side: 'right',
      angle: 0,
      position: [55, 85]
    }, {
      type: 'leg',
      side: 'left',
      angle: 0,
      position: [55, 85]
    }]
  },
  drop (event) {
    event.preventDefault()
    var data = event.dataTransfer.getData('BOD')
    console.dir(data)
    event.target.append(document.getElementsByClassName(data))
  },
  drag (event) {
    console.dir(event.target)
    event.dataTransfer.setData('BOD', event.target)
  },
  allowDrop (event) {
    event.preventDefault()
  },
  render () {
    const bodyForm = this.hooray()
    return (
      <div className='container'>
        <Body
          draggable='true'
          rightArm={bodyForm[0]}
          leftArm={bodyForm[1]}
          leftLeg={bodyForm[2]}
          rightLeg={bodyForm[3]}
          onDragStart={this.drag}
        />
        <div
          className='drop-location'
          onDrop={this.drop}
          onDragOver={this.allowDrop}
          />
      </div>
    )
  }
})

render(<ClientApp />, document.getElementById('client-app'))
