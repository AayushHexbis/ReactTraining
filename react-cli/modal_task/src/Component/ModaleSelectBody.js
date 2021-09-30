import React from 'react'
import './CSS/Modale.css'
class ModaleSelectBody extends React.Component {
  render() {
    return (
      <select id={this.props.id} className="form-select" disabled>
        <option selected>{this.props.materialType}</option>
      </select>
    )
  }
}

export default ModaleSelectBody
