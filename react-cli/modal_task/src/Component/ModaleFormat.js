import React from 'react'
import "./CSS/Modale.css"
import ModaleSelectBody from './ModaleSelectBody'
import ModaleTextBody from './ModaleTextBody'
import ModaleLabel from './ModaleLabel'
import ModaleButton from './ModaleButton'
import ModaleCheckBox from './ModaleCheckBox'
import ModaleDarkButton from './ModaleDarkButton'

class Modale extends React.Component {
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
              <ModaleSelectBody id="Label1" materialType="Select Material Type" />
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
              <ModaleTextBody id="Label2" />
            </div>
          </div>

          {/* Part No. Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label3" label="Part No:" />
            </div>
            <div className="col-md-8">
              <ModaleTextBody id="Label3" />
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
              <ModaleTextBody id="Label5" />
            </div>
          </div>

          {/* Description Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label6" label="Description:" />
            </div>
            <div className="col-md-6">
              <ModaleTextBody id="Label6" />
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3">
                  <ModaleLabel id="Label7" label="Unit:" />
                </div>
                <div className="col-md-9">
                  <ModaleSelectBody id="Label7" />
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
              <ModaleTextBody id="Label8" label="Stock Location:" />
            </div>
            <div className="col-md-2" id="label09">
              <ModaleLabel id="Label9" label="Cons Unit:" />
            </div>
            <div className="col-md-4">
              <ModaleSelectBody id="Label9" materialType="Select Material Type" />
            </div>
          </div>

          {/* HSN Code Field */}

          <div className="row mb-3">
            <div className="col-md-2">
              <ModaleLabel id="Label10" label="HSN Code:" />
            </div>
            <div className="col-md-4">
              <ModaleTextBody id="Label10" />
            </div>
            <div className="col-md-2" id="label011">
              <ModaleLabel id="Label11" label="Tax %:" />
            </div>
            <div className="col-md-4">
              <ModaleTextBody id="Label11" />
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
              <ModaleButton title="Save" access={true} />
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

export default Modale