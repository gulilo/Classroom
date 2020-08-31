import React, { Component } from "react";

import ClassList from "../Components/ClassList";

import { MockedContext } from "../MockedContext";

class ClassListRoute extends Component {
  static contextType = MockedContext;

  state = { classes: [] };

  componentDidMount() {
    const classes = [...this.context.classes.getAll()];

    this.setState({ classes });
  }

  render() {
    return <ClassList classes={this.state.classes} />;
  }
}

export default ClassListRoute;
