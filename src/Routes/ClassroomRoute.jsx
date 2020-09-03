import React, { Component } from "react";

import ClassRoomComponent from "../Components/ClassRoomComponent";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";

class ClassroomRoute extends Component {
  static contextType = MockedContext;

  state = { classroom: { id: -1, name: "bla", students: [] } };

  getClassId = () => parseInt(this.props.match.params.classId, 10);

  init = () => {
    const classroom = this.context.classes.getById(this.getClassId());
    this.setState({ classroom });
  };

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.classId !== this.props.match.params.classId) {
      this.init();
    }
  }

  render() {
    if (this.state.classroom.id === -1) {
      return null;
    }

    return (
      <div className={Style_MainGrid.appClassroomArea}>
        <div className={Style_MainGrid.AppMenuArea2}>
          <ClassRoomComponent classroom={this.state.classroom} />
        </div>
      </div>
    );
  }
}

export default ClassroomRoute;
