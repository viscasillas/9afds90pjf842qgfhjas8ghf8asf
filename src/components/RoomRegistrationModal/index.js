import React, { Component } from "react";
import { Container, FieldInput, Form } from "./styled";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/style.css";
import SmallButton from "../SmallButton";
export default class RoomRegistrationModal extends Component {
  constructor() {
    super();
    this.state = {
      form: {}
    };
  }

  updateForm = (key, value) => {
    let state = this.state;
    state["form"][key] = value;
    this.setState({
      ...state
    });
  };

  render() {
    return (
      <Container>
        <Form>
          <h1>Create a room</h1>
          <label style={{ color: "white", fontWeight: 100, fontSize: 18 }}>
            Candidate Info
            <br />
            <br />
            <FieldInput
              type="text"
              placeholder="Name"
              onBlur={e => this.updateForm("candidateName", e.target.value)}
            />
            <FieldInput
              type="text"
              placeholder="Email"
              onBlur={e => this.updateForm("candidateEmail", e.target.value)}
            />
          </label>
          <br />

          <br />

          <label style={{ color: "white", fontWeight: 100, fontSize: 18 }}>
            Monitors Info <br />
            <br />
            <ReactMultiEmail
              placeholder="List all monitors emails"
              onChange={emails => {
                this.updateForm("monitors", emails);
              }}
              getLabel={(email, index, removeEmail) => (
                <div data-tag key={index}>
                  {email}
                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    ×
                  </span>
                </div>
              )}
            />
            <br />
          </label>
          <SmallButton onClick={() => this.props.handleSubmit(this.state.form)}>
            Submit
          </SmallButton>
        </Form>
      </Container>
    );
  }
}
