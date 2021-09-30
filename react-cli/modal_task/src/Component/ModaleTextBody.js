import React from 'react'
import './CSS/Modale.css'
class ModaleTextBody extends React.Component {
  render() {
    return (
      <input type="text" id={this.props.id} className="form-control" disabled />
    )
  }
}

export default ModaleTextBody
