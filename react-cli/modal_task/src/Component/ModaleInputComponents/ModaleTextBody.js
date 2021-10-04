import React from 'react'
import '../CSS/Modale.css'
class ModaleTextBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.baseState = this.state.inputValue
  }
  handleChange(event) {
    console.log(this.baseState)
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue)
    // console.log(this.state.inputValue)

  }
  render() {
    return (
      <>
        <input type="text" id={this.props.id} className="form-control" disabled={this.props.access} value={(this.props.access === true) ? "" : this.state.inputValue} onChange={this.handleChange} />
      </>
    )
  }
}

export default ModaleTextBody
