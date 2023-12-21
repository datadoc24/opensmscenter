import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { CONTACT_URL } from "../constants";

class NewContactForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    phone: ""
  };

  componentDidMount() {
    if (this.props.contact) {
      const { pk, name, email, phone } = this.props.contact;
      this.setState({ pk, name, email, phone });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createContact = e => {
    e.preventDefault();
    axios.post(CONTACT_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editContact = e => {
    e.preventDefault();
    axios.put(CONTACT_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.contact ? this.editContact : this.createContact}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Save</Button>
      </Form>
    );
  }
}

export default NewContactForm;
