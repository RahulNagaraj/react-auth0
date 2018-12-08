import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    profile: null,
    error: null
  };

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.props.auth.getProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }

  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
        <h1>Profile</h1>
        <p>Name: {profile.given_name}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture}
          alt="profile pic"
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}
