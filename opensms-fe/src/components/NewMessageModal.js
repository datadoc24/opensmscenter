import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewMessageForm from "./NewMessageForm";

class NewMessageModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {

    var title = "Send new message";
    var button = (
      <Button
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
      >
        Send message
      </Button>
    );


    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewMessageForm
              resetState={this.props.resetState}
              toggle={this.toggle}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewMessageModal;
