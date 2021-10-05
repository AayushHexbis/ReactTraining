import React from 'react'
// import "./Modale.css"
import ModaleBody from './ModalBody/ModaleBody'
import ModaleHeader from './ModalHeader/ModaleHeader'
import { Modal, Button } from 'react-bootstrap'
import ModaleFooter from './ModalFooter/ModaleFooter'


class Modale extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  handleClick() {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <>
        <Button onClick={() => this.handleClick()} id="clci">Click Me</Button>
        <Modal show={this.state.show} onHide={() => this.handleClick()} id="myid">

          <Modal.Header closeButton>
            <ModaleHeader/>
          </Modal.Header>
          <Modal.Body>
            <ModaleBody />
            {/* <ModaleTestInput/> */}
          </Modal.Body>
          <Modal.Footer id="modal-footer">
            <div className="row mb-3">
              <div className="col">
                <ModaleFooter title="Previous" />
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <ModaleFooter title="Next" click={this.callAxios} />
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    )
  }


}

export default Modale