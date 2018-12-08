import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <button onClick={this.props.auth.login}>Log In</button>
      </>
    );
  }
}
