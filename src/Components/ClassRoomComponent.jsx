import React, { Component } from "react";
import StudentList from "./StudentList";

import { students as StudentsList } from "../mockedData/Students";

class ClassRoomComponent extends Component {
  state = { students: [] };

  componentDidMount() {
    const students = StudentsList.filter(({ id }) =>
      this.props.classroom.students.find((student) => student.id === id)
    );
    this.setState({ students });
  }

  render() {
    if (this.state.students.length === 0) {
      return null;
    }

    return (
      <div>
        <h2>class name: {this.props.classroom.name}</h2>
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
