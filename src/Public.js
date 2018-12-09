import React, { Component } from "react";

export default class Public extends Component {
  state = {
    message: ""
  };
  componentDidMount() {
    fetch("/public")
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
