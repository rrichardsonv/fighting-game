import React from 'react'
import AngleController from './AngleController'
// import BodyPartPalette from './BodyPartPalette'

class ControlPanel extends React.Component {
  render () {
    return (
      <div className='control-panel'>
        <AngleController angleHandlers={this.props.angleHandlers} />
      </div>
    )
  }
}
        // <BodyPartPalette typeHandlers={this.props.typeHandlers} />
const { object } = React.PropTypes

ControlPanel.propTypes = {
  angleHandlers: object,
  typeHandlers: object
}

export default ControlPanel
