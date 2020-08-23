import React, { Component } from "react";
import StudentEdit from "../Components/StudentEdit";

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

    const studentLikes = students.filter(({ id }) =>
      classStudent.likes.find((student) => student === id)
    );

    const studentsDislikes = students.filter(({ id }) =>
      classStudent.dislike.find((student) => student === id)
    );

    const student = {
      id: classStudent.id,
      name: students.find(({ id }) => id === parseInt(classStudent.id, 10))
        .name,
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

  changeName = (newName) =>
    (students.find(({ id }) => id === this.state.student.id).name = newName);

  getStudent = (studentId) =>
    students.find(({ id }) => id === parseInt(studentId, 10));

  deleteFromList = (toDeleteId, list) => {
    // not really working or needed.. move to save button
    const todelete = parseInt(toDeleteId, 10);

    if (list === "likes") {
      const index = this.state.student.likes.indexOf(todelete);
      console.log(index);
      classes
        .find(({ id }) => id === this.getClassId())
        .students.find(({ id }) => id === this.getStudentId())
        .likes.splice(index, 1);
    } else if (list === "dislike") {
      const index = this.state.student.dislike.indexOf(todelete);
      classes
        .find(({ id }) => id === this.getClassId())
        .students.find(({ id }) => id === this.getStudentId())
        .dislike.splice(index, 1);
    }
  };

  addToList = (toAddId, list) => {
    const toAdd = parseInt(toAddId, 10);

    if (list === "likes") {
      classes
        .find(({ id }) => id === this.getClassId())
        .students.find(({ id }) => id === this.getStudentId())
        .likes.push(toAdd);
    } else if (list === "dislike") {
      classes
        .find(({ id }) => id === this.getClassId())
        .students.find(({ id }) => id === this.getStudentId())
        .dislike.push(toAdd);
    }
  };

  render() {
    if (this.state.student.id === -1) {
      return null;
    }

    return (
      <StudentEdit
        student={this.state.student}
        otherStudents={this.state.otherStudents}
        changeName={this.changeName}
        getStudent={this.getStudent}
        deleteFromList={this.deleteFromList}
        addToList={this.addToList}
      ></StudentEdit>
    );
  }
}

export default StudentEditRoute;
