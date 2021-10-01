import React from 'react'
import './CSS/Modale.css'
class ModaleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: this.props.access
    }
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleFindButton = this.handleFindButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleExitButton = this.handleExitButton.bind(this);
  }
  handleAddButton() {
    this.setState({ change: !this.state.change })

    const Childvalue = (this.state.change);
    console.log(this.state.change)
  }

  handleEditButton() {
    this.setState({ change: !this.state.change })
    console.log(this.state.change)
  }

  handleSaveButton() {
    this.setState({ change: !this.state.change })
    console.log(this.state.change)
  }

  handleFindButton() {
    this.setState({ change: !this.state.change })
    console.log(this.state.change)
  }

  handleDeleteButton() {
    this.setState({ change: !this.state.change })
    console.log(this.state.change)
  }

  handleExitButton() {
    this.setState({ change: !this.state.change })
    console.log(this.state.change)
  }

  render() {
    return (
      <button onClick={() => {
        if (this.props.title === "Add") {
          this.handleAddButton();
          console.log("You Clicked on Add")
        }
        else if (this.props.title === "Edit") {
          this.handleEditButton();
          console.log("You Clicked on Edit")
        }
        else if (this.props.title === "Save") {
          this.handleSaveButton();
          console.log("You Clicked on Save")
        }
        else if (this.props.title === "FIND") {
          this.handleFindButton();
          console.log("You Clicked on Find")
        }
        else if (this.props.title === "Delete") {
          this.handleDeleteButton();
          console.log("You Clicked on Delete")
        }
        else if (this.props.title === "Exit") {
          this.handleExitButton();
          console.log("You Clicked on Exit")
        }
      }}
        type="button" className="btn btn-primary" style={{ width: "100%" }} disabled={this.props.access}>{this.props.title}</button>
    )
  }
}

export default ModaleButton
