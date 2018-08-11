import React, { Component } from "react";
import Hello from "./Hello";
import World from "./World";

class HelloWorld extends Component {
  render() {
    return (
      <React.Fragment>
        <Hello />
        <World name="Dude!" />
      </React.Fragment>
    );
  }
}

export default HelloWorld;
