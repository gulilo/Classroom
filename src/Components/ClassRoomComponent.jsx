import React, { Component } from "react";
import StudentList from "./StudentList";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";
import _ from "lodash";

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
      <div className={Style_MainGrid.AppMainArea}>
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
