import React, { Component } from "react";
import { Table } from "reactstrap";
import NewContactModal from "./NewContactModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <Table striped bordered>
        <thead>
          <tr className="table-primary">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Registration</th>
            <th>Actions</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {!contacts || contacts.length <= 0 ? (
            <tr>
              <td colSpan="5" align="center">
                <b>Oops, no one here yet</b>
              </td>
            </tr>
          ) : (
            contacts.map(contact => (
              <tr key={contact.pk}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.registrationDate}</td>
                <td align="center">
                  <NewContactModal
                    create={false}
                    contact={contact}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={contact.pk}
                    resetState={this.props.resetState}
                  />
                </td>
                <td><label>
        <input
          type="checkbox"
        />
      </label></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ContactList;
