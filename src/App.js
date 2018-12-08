import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}

export default App;
