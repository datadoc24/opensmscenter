import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactList from "./ContactList";
import NewContactModal from "./NewContactModal";
import NewMessageModal from "./NewMessageModal";

import axios from "axios";

import { CONTACT_URL } from "../constants";

class Home extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.resetState();
  }

  getContacts = () => {
    axios.get(CONTACT_URL).then(res => this.setState({ contacts: res.data }));
  };

  resetState = () => {
    this.getContacts();
  };

  render() {
    return (
      <Container style={{ marginTop: "2px" }}>
        <Row>
          <Col>
            <ContactList
              contacts={this.state.contacts}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewContactModal create={true} resetState={this.resetState} />
            &nbsp;
            <NewMessageModal />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
