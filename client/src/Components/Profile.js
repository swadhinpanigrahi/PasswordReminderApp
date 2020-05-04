import React, { Component } from "react";
import jwt_decode from "jwt-decode";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fisrt_name: "",
      last_name: "",
      email: "",
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    this.setState({
      fisrt_name: decode.fisrt_name,
      last_name: decode.last_name,
      email: decode.email,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Profile</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.fisrt_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
