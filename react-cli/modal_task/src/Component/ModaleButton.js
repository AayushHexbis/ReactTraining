import React from 'react'
import './CSS/Modale.css'
class ModaleLabel extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-primary" style={{ width: "100%" }} disabled={this.props.access}>{this.props.title}</button>
    )
  }
}

export default ModaleLabel
