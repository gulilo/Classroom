import React, { Component } from "react";

import ClassRoomComponent from "../Components/ClassRoomComponent";

import { MockedContext } from "../MockedContext";

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

    return <ClassRoomComponent classroom={this.state.classroom} />;
  }
}

export default ClassroomRoute;
