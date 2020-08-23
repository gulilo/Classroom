import React, { Component } from "react";

import { classes } from "../mockedData/classes";
import ClassRoomComponent from "../Components/ClassRoomComponent";

class ClassroomRoute extends Component {
  state = { classroom: { id: -1, name: "bla", students: [] } };

  getClassId = () => parseInt(this.props.match.params.classId, 10);

  componentDidMount() {
    const classroom = classes.find(({ id }) => id === this.getClassId());
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
