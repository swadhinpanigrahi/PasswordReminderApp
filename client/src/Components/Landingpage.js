import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default class Landingpage extends Component {
  render() {
    return (
      <Container>
        <Jumbotron className="text-center">
          <h1>Welcome</h1>
        </Jumbotron>
      </Container>
    );
  }
}
