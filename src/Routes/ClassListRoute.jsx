import React, { Component } from "react";

import { classes as classesList } from "../mockedData/classes";
import ClassList from "../Components/ClassList";

class ClassListRoute extends Component {
  state = { classes: [] };

  componentDidMount() {
    const classes = [...classesList];

    this.setState({ classes });
  }

  render() {
    return <ClassList classes={this.state.classes} />;
  }
}

export default ClassListRoute;
