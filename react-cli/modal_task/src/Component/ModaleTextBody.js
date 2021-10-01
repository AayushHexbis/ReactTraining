import React from 'react'
import './CSS/Modale.css'
class ModaleTextBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: this.props.inputValue};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }
  render() {
    console.log(this.props.inputValue)
    return (
      
      <input type="text" id={this.props.id} className="form-control" disabled={this.props.access} value={this.state.inputValue} onChange={() => {if(this.props.title==="Add") { this.state.inputValue = "" } else {this.handleChange}}}/>
    )
  }
}

export default ModaleTextBody
