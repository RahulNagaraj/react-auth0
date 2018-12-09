import React, { Component } from "react";

export default class Private extends Component {
  state = {
    message: ""
  };
  componentDidMount() {
    fetch("/private", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response not ok");
      })
      .then(json => this.setState({ message: json.message }))
      .catch(err => this.setState({ message: err.message }));
  }
  render() {
    return <p>{this.state.message}</p>;
  }
}
