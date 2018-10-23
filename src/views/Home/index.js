import React, { Component, Fragment } from "react";
import { Wrapper, Container, LogoContainer } from "./styled";
import API from "../../services/API";
import RoomRegistrationModal from "../../components/RoomRegistrationModal";
import BigButton from "../../components/BigButton";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      form: false
    };
  }

  makeid = length => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };
  prepareRoom = roomDetails => {
    // lets get some UUDIS
    API.createRoom({
      questions: [],
      users: [
        {
          linkId: this.makeid(45),
          email: roomDetails.candidateEmail,
          name: roomDetails.candidateName,
          role: "candidate"
        },
        ...roomDetails.monitors.map(monitor => {
          return {
            linkId: this.makeid(45),
            email: monitor,
            name: "",
            role: "monitor"
          };
        })
      ]
    }).then(
      response => console.log(response)
      // (window.location.href = "/editor/" + response.response)
    );
  };

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.form && (
          <RoomRegistrationModal
            className="fadeInRight animated"
            handleSubmit={roomDetails => this.prepareRoom(roomDetails)}
          />
        )}

        <Wrapper>
          <Container className={this.state.form && "active"}>
            <LogoContainer className={this.state.form && "active"}>
              <sup>{"< "}</sup>
              <b>Live</b>
              Code
              <sup>{" />"}</sup>
            </LogoContainer>

            <BigButton
              className={this.state.form}
              onClick={() => this.toggleForm()}
            >
              create a room
            </BigButton>
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}
