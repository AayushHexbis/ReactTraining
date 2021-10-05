import React from 'react'
import "../Modale.css"
import { TextField, InputLabel, Select, MenuItem, Checkbox } from '@material-ui/core';


class ModaleBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      materialSelect: 0,     // initialized a value to be accessed and passed to ModaleTextBody
      partNameValue: "",
      partNumberValue: "",
      ppcNameValue: "",
      descriptionValue: "",
      allowBomValue: false,
      unitValue: 0,
      stockValue: "",
      consValue: 0,
      hsnValue: "",
      taxValue: ""
    }
    this.getValueFromChild = this.getValueFromChild.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.disableField = this.disableField.bind(this);
    this.setMaterialSelect = this.setMaterialSelect.bind(this);
    this.setPartNameValue = this.setPartNameValue.bind(this);
    this.setPartNumberValue = this.setPartNumberValue.bind(this);
    this.setPpcNameValue = this.setPpcNameValue.bind(this);
    this.setDescriptionValue = this.setDescriptionValue.bind(this);
    this.setAllowBomValue = this.setAllowBomValue.bind(this);
    this.setUnitValue = this.setUnitValue.bind(this);
    this.setStockValue = this.setStockValue.bind(this);
    this.setConsValue = this.setConsValue.bind(this);
    this.setHsnValue = this.setHsnValue.bind(this);
    this.setTaxValue = this.setTaxValue.bind(this);



  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
    alert("Hello")
  }

  getValueFromChild(e) {         // Declared a function to get value from child
    this.setState({ value: e })    // Setting state value to e 
  }

  disableField(e) {
    this.setState({
      value: !this.state.value,
      materialSelect: 0,
      partNameValue: "",
      partNumberValue: "",
      ppcNameValue: "",
      descriptionValue: "",
      allowBomValue: false,
      unitValue: 0,
      stockValue: "",
      consValue: 0,
      hsnValue: "",
      taxValue: ""
    })
  }

  setMaterialSelect(e) {
    this.setState({ materialSelect: e.target.value })
  }
  setPartNameValue(e) {
    this.setState({ partNameValue: e.target.value })
  }
  setPartNumberValue(e) {
    this.setState({ partNumberValue: e.target.value })
  }
  setPpcNameValue(e) {
    this.setState({ ppcNameValue: e.target.value })
  }
  setDescriptionValue(e) {
    this.setState({ descriptionValue: e.target.value })
  }
  setAllowBomValue(e) {
    this.setState({ allowBomValue: !this.state.allowBomValue })
  }
  setUnitValue(e) {
    this.setState({ unitValue: e.target.value })
  }
  setStockValue(e) {
    this.setState({ stockValue: e.target.value })
  }
  setConsValue(e) {
    this.setState({ consValue: e.target.value })
  }
  setHsnValue(e) {
    this.setState({ hsnValue: e.target.value })
  }
  setTaxValue(e) {
    this.setState({ taxValue: e.target.value })
  }

  render() {
    return (
      <>
        <form action="">
          {/* Material Type Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="MaterialType" className="InputLabel">Material Type:</InputLabel>
            </div>
            <div className="col-md-9">
              <Select id="MaterialType" value={this.state.materialSelect} onChange={this.setMaterialSelect} disabled={this.state.value}>
                <MenuItem value='0' disabled>Select Material Type</MenuItem>
                <MenuItem value='1'>Choose 1</MenuItem>
                <MenuItem value='2'>Choose 2</MenuItem>
                <MenuItem value='3'>Choose 3</MenuItem>
                <MenuItem value='4'>Choose 4</MenuItem>
              </Select>
            </div>
            <div className="col-md-1">
              <button className="btn btn-dark" type='button' onClick={() => alert("Function Allowed In Add Mode")}>...</button>
            </div>
          </div>

          {/* Part Name Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="PartName" className="InputLabel">Part Name:</InputLabel>

            </div>
            <div className="col-md-10">
              <TextField id="PartName" disabled={this.state.value} value={this.state.partNameValue} onChange={this.setPartNameValue} />

            </div>
          </div>

          {/* Part No. Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="Label3" className="InputLabel">Part No:</InputLabel>

            </div>
            <div className="col-md-8">
              <TextField id="standard-basic" value={this.state.partNumberValue} disabled={this.state.value} onChange={this.setPartNumberValue} />

            </div>
            <div className="col-md-2">
              <Checkbox disabled={this.state.value} checked={this.state.allowBomValue} onChange={this.setAllowBomValue} />
              <InputLabel name="Label4" style={{display:"inline-block"}} className="InputLabel" >Allow Bom</InputLabel>

            </div>
          </div>

          {/* PPC Name Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="Label5" className="InputLabel">PPC Name:</InputLabel>

            </div>
            <div className="col-md-10">
              <TextField id="standard-basic" value={this.state.ppcNameValue} disabled={this.state.value} onChange={this.setPpcNameValue} />

            </div>
          </div>

          {/* Description Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="Label6" className="InputLabel">Description:</InputLabel>

            </div>
            <div className="col-md-6">
              <TextField id="standard-basic" value={this.state.descriptionValue} disabled={this.state.value} onChange={this.setDescriptionValue} />

            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3">
                  <InputLabel name="Label7" className="InputLabel">Unit:</InputLabel>

                </div>
                <div className="col-md-9">
                  <Select id="standard-basic" value={this.state.unitValue} disabled={this.state.value} onChange={this.setUnitValue}>
                  <MenuItem value='0' disabled>Select Unit</MenuItem>
                    <MenuItem value='1' selected>Choose 1</MenuItem>
                    <MenuItem value='2'>Choose 2</MenuItem>
                    <MenuItem value='3'>Choose 3</MenuItem>
                    <MenuItem value='4'>Choose 4</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Location Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="Label8" className="InputLabel">Stock Location:</InputLabel>

            </div>
            <div className="col-md-4">
              <TextField id="standard-basic" value={this.state.stockValue} disabled={this.state.value} onChange={this.setStockValue} />

            </div>
            <div className="col-md-2" >
              <InputLabel name="Label9" className="InputLabel">Cons Unit:</InputLabel>

            </div>
            <div className="col-md-4">
              <Select id="standard-basic" value={this.state.consValue} disabled={this.state.value} onChange={this.setConsValue}>
              <MenuItem value='0' disabled>Select ConsUnit</MenuItem>
                <MenuItem value='1'>Choose 1</MenuItem>
                <MenuItem value='2'>Choose 2</MenuItem>
                <MenuItem value='3'>Choose 3</MenuItem>
                <MenuItem value='4'>Choose 4</MenuItem>
              </Select>
            </div>
          </div>

          {/* HSN Code Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <InputLabel name="Label10" className="InputLabel">HSN Code:</InputLabel>

            </div>
            <div className="col-md-4">
              <TextField id="standard-basic" value={this.state.hsnValue} disabled={this.state.value} onChange={this.setHsnValue} />

            </div>
            <div className="col-md-2" id="label011">
              <InputLabel name="Label11" className="InputLabel">Tax %:</InputLabel>

            </div>
            <div className="col-md-4">
              <TextField id="standard-basic" value={this.state.taxValue} disabled={this.state.value} onChange={this.setTaxValue} />

            </div>
          </div>

          {/* Footer Buttons */}

          <div className="row mb-3">
            <div className="col-md-2">
              <button className="btn btn-primary" style={{ width: "100%" }} type='button' onClick={this.disableField}>{this.state.value ? "Add" : "Remove"}</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success" style={{ width: "100%" }} type='button'>Edit</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success" style={{ width: "100%" }} type='button' onClick={() => alert("Data Saved Successfully")}>Save</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-info" style={{ width: "100%" }} type='button'>Find</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger" style={{ width: "100%" }} type='button'>Delete</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-warning" style={{ width: "100%" }} type='button'>Exit</button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default ModaleBody