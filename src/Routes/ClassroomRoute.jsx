import React, { Component } from "react";

import ClassRoomComponent from "../Components/ClassRoomComponent";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";
import ClassData from "../Components/ClassData";

class ClassroomRoute extends Component {
  static contextType = MockedContext;

  state = { classroom: { id: -1, name: "bla", students: [] } };

  getClassId = () => parseInt(this.props.match.params.classId, 10);

  componentDidMount() {
    const classroom = this.context.classes.getById(this.getClassId());
    this.setState({ classroom });
  }

  render() {
    if (this.state.classroom.id === -1) {
      return null;
    }

    return (
      <div className={Style_MainGrid.AppMainArea}>
        <ClassRoomComponent classroom={this.state.classroom} />
        <ClassData classroom={this.state.classroom} />
      </div>
    );
  }
}

export default ClassroomRoute;
