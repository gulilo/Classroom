import React, { Component } from "react";
import _ from "lodash";

import StudentEdit from "../Components/StudentEdit";

import { MockedContext } from "../MockedContext";

class StudentEditRoute extends Component {
  static contextType = MockedContext;

  state = {
    student: { id: -1, name: "", likes: [], dislike: [] },
    otherStudents: [{ id: -1, name: "" }],
  };

  getStudentId = () => parseInt(this.props.match.params.studentId, 10);
  getClassId = () => parseInt(this.props.match.params.classId, 10);

  init = () => {
    const api = this.context;
    const classStudent = api.classes.getStudent(
      this.getClassId(),
      this.getStudentId()
    );

    const studentLikes = api.student.getLikes(
      this.getClassId(),
      this.getStudentId()
    );

    const studentsDislikes = api.student.getDislikes(
      this.getClassId(),
      this.getStudentId()
    );

    const student = {
      id: classStudent.id,
      name: api.student.getName(this.getStudentId()),
      likes: studentLikes,
      dislike: studentsDislikes,
    };

    const otherStudents = _.map(
      api.classes.getStudentList(this.getClassId()),
      ({ id }) => api.student.getStudent(id)
    );
    this.setState({ student, otherStudents });
  };

  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.studentId !== this.props.match.params.studentId
    ) {
      this.init();
    }
  }

  saveStudent = () => {
    const api = this.context;

    if (this.state.student.id === -1) {
      return;
    }
    const student = this.state.student;

    const mockedStudent = api.student.getStudent(student.id);

    const mockedClassStudent = api.classes.getStudent(
      this.getClassId(),
      this.getStudentId()
    );

    mockedStudent.name = student.name;
    mockedClassStudent.likes = student.likes.map(({ id }) => id);
    mockedClassStudent.dislike = student.dislike.map(({ id }) => id);

    //this.props.history.go(0); // refrash the page
  };

  handleCancel = () => {
    const api = this.context;

    if (this.state.student.id === -1) {
      return;
    }
    const student = this.state.student;

    student.name = api.student.getName(this.getStudentId());
    student.likes = api.student.getLikes(
      this.getClassId(),
      this.getStudentId()
    );
    student.dislike = api.student.getDislikes(
      this.getClassId(),
      this.getStudentId()
    );

    this.setState({ student });
    //this.props.history.go(0); // refrash the page
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
      />
    );
  }
}

export default StudentEditRoute;
