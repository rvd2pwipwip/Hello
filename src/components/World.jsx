import React, { Component } from "react";

class World extends Component {
  state = {};
  render() {
    return <p>{this.props.name || "World!"}</p>;
  }
}

export default World;
