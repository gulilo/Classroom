import React, { Component } from "react";

import ClassList from "../Components/ClassList";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";

class ClassListRoute extends Component {
  static contextType = MockedContext;

  state = { classes: [] };

  componentDidMount() {
    const classes = [...this.context.classes.getAll()];

    this.setState({ classes });
  }

  render() {
    return (
      <div className={Style_MainGrid.AppMenuArea1}>
        <ClassList classes={this.state.classes} />
      </div>
    );
  }
}

export default ClassListRoute;
