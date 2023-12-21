import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { MSG_URL } from "../constants";

class NewMessageForm extends React.Component {
  state = {
    text: "Hello"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMessage = e => {
    e.preventDefault();
    axios.post(MSG_URL, this.state).then(() => {
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.sendMessage}>
        <FormGroup>
          <Label for="msgtext">Message text:</Label>
          <Input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.text)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewMessageForm;
