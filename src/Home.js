import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        {this.props.auth.isAuthenticated() ? (
          <Link to="/profile"> View Profile</Link>
        ) : (
          <button onClick={this.props.auth.login}>Log In</button>
        )}
      </>
    );
  }
}
