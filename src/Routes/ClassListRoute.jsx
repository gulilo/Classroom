import React, { Component } from "react";

import ClassList from "../Components/ClassList";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";
import { Route } from "react-router";
import ClassroomRoute from "./ClassroomRoute";
import ClassData from "../Components/ClassData";

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
        <ClassData />
      </div>
    );
  }
}

export default ClassListRoute;
