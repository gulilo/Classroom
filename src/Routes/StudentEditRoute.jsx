import React, { Component } from "react";
import StudentEdit from "../Components/StudentEdit";

import _ from "lodash";

import { classes } from "../mockedData/classes";
import { students } from "../mockedData/Students";

class StudentEditRoute extends Component {
  state = {
    student: { id: -1, name: "", likes: [], dislike: [] },
    otherStudents: [{ id: -1, name: "" }],
  };

  getStudentId = () => parseInt(this.props.match.params.studentId, 10);
  getClassId = () => parseInt(this.props.match.params.classId, 10);

  componentDidMount() {
    const classStudent = classes
      .find(({ id }) => id === this.getClassId())
      .students.find(({ id }) => id === this.getStudentId());

    const studentName = (
      " " + students.find(({ id }) => id === parseInt(classStudent.id, 10)).name
    ).slice(1); // bug in chorme... forcing deep copy...

    const studentLikes = _.cloneDeep(
      students.filter(({ id }) =>
        classStudent.likes.find((student) => student === id)
      )
    );

    const studentsDislikes = _.cloneDeep(
      students.filter(({ id }) =>
        classStudent.dislike.find((student) => student === id)
      )
    );

    const student = {
      id: classStudent.id,
      name: studentName,
      likes: studentLikes,
      dislike: studentsDislikes,
    };

    const otherStudents = students.filter(({ id }) =>
      classes
        .find(({ id }) => id === this.getClassId())
        .students.find((student) => student.id === id)
    );

    this.setState({ student, otherStudents });
  }

  saveStudent = () => {
    console.log("bla");
    if (this.state.student.id === -1) {
      console.log("create new!");
      return;
    }
    const student = this.state.student;

    const mockedStudent = students.find(
      ({ id }) => id === this.state.student.id
    );

    const mockedClassStudent = classes
      .find(({ id }) => id === this.getClassId())
      .students.find(({ id }) => id === this.getStudentId());

    mockedStudent.name = student.name;
    mockedClassStudent.likes = student.likes.map(({ id }) => id);
    mockedClassStudent.dislike = student.dislike.map(({ id }) => id);

    this.props.history.go(0); // refrash the page
  };

  handleCancel = () => {
    console.log("cancel");
    this.props.history.go(0); // refrash the page
  };

  render() {
    if (this.state.student.id === -1) {
      return null;
    }

    return (
      <StudentEdit
        student={this.state.student}
        otherStudents={this.state.otherStudents}
        saveStudent={this.saveStudent}
        cancel={this.handleCancel}
      ></StudentEdit>
    );
  }
}

export default StudentEditRoute;
