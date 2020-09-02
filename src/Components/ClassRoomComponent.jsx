import React, { Component } from "react";
import _ from "lodash";

import StudentList from "./StudentList";

import { MockedContext } from "../MockedContext";

class ClassRoomComponent extends Component {
  static contextType = MockedContext;

  state = { students: [] };

  componentDidMount() {
    const students = _.map(
      this.context.classes.getStudentList(this.props.classroom.id),
      ({ id }) => this.context.student.getStudent(id)
    );
    this.setState({ students });
  }

  render() {
    if (this.state.students.length === 0) {
      return null;
    }

    return (
      <div>
        <StudentList
          key={this.props.classroom.id}
          classId={this.props.classroom.id}
          students={this.state.students}
        />
      </div>
    );
  }
}

export default ClassRoomComponent;
