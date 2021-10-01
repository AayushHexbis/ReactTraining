import React from 'react'
import "./CSS/Modale.css"
import ModaleSelectBody from './ModaleSelectBody'
import ModaleTextBody from './ModaleTextBody'
import ModaleLabel from './ModaleLabel'
import ModaleButton from './ModaleButton'
import ModaleCheckBox from './ModaleCheckBox'
import ModaleDarkButton from './ModaleDarkButton'

class ModaleFormat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Parentvalue: this.props.Childvalue
    }
  }
  render() {
    return (
      <>
        <form action="">

          {/* Material Type Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label1" label="Material Type:" />
            </div>
            <div className="col-md-9">
              <ModaleSelectBody access={true} id="Label1" materialType="Select Material Type" />
            </div>
            <div className="col-md-1">
              <ModaleDarkButton class="btn btn-dark" />
            </div>
          </div>

          {/* Part Name Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label2" label="Part Name:" />
            </div>
            <div className="col-md-10">
              <ModaleTextBody id="Label2" access={true} />
            </div>
          </div>

          {/* Part No. Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label3" label="Part No:" />
            </div>
            <div className="col-md-8">
              <ModaleTextBody id="Label3" access={true} />
            </div>
            <div className="col-md-2">
              <ModaleCheckBox id="Label4" />&nbsp;
              <ModaleLabel id="Label4" label="Allow Bom" />
            </div>
          </div>

          {/* PPC Name Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label5" label="PPC Name:" />
            </div>
            <div className="col-md-10">
              <ModaleTextBody id="Label5" access={true} />
            </div>
          </div>

          {/* Description Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label6" label="Description:" />
            </div>
            <div className="col-md-6">
              <ModaleTextBody id="Label6" access={true} />
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3">
                  <ModaleLabel id="Label7" label="Unit:" />
                </div>
                <div className="col-md-9">
                  <ModaleSelectBody access={true} id="Label7" materialType="Select Unit" />
                </div>
              </div>
            </div>
          </div>

          {/* Stock Location Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label8" label="Stock Location:" />
            </div>
            <div className="col-md-4">
              <ModaleTextBody id="Label8" label="Stock Location:" access={true} />
            </div>
            <div className="col-md-2" id="label09">
              <ModaleLabel id="Label9" label="Cons Unit:" />
            </div>
            <div className="col-md-4">
              <ModaleSelectBody access={true} id="Label9" materialType="Select ConsUnit:" />
            </div>
          </div>

          {/* HSN Code Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label10" label="HSN Code:" />
            </div>
            <div className="col-md-4">
              <ModaleTextBody id="Label10" access={true} />
            </div>
            <div className="col-md-2" id="label011">
              <ModaleLabel id="Label11" label="Tax %:" />
            </div>
            <div className="col-md-4">
              <ModaleTextBody id="Label11" access={true} />
            </div>
          </div>

          {/* Footer Buttons */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleButton title="Add" access={false} />
            </div>
            <div className="col-md-2">
              <ModaleButton title="Edit" access={false} />
            </div>
            <div className="col-md-2">
              <ModaleButton title="Save" access={false} />
            </div>
            <div className="col-md-2">
              <ModaleButton title="FIND" access={false} />
            </div>
            <div className="col-md-2">
              <ModaleButton title="Delete" access={false} />
            </div>
            <div className="col-md-2">
              <ModaleButton title="Exit" access={false} />
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default ModaleFormat