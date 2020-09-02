import React, { Component } from "react";
import StudentEdit from "../Components/StudentEdit";
import StudentInfo from "../Components/StudentInfo";
import { MockedContext } from "../MockedContext";

class StudentRoute extends Component {
  static contextType = MockedContext;

  state = {
    newStudent: false,
    studentInfo: false,
    studentEdit: false,
  };
  getStudentId = () => parseInt(this.props.match.params.studentId, 10);
  getClassId = () => parseInt(this.props.match.params.classId, 10);

  componentDidMount() {
    var newStudent = false;
    var studentInfo = false;
    if (this.props.match.params.studentId === "new") {
      newStudent = true;
    } else {
      studentInfo = true;
    }

    this.setState({ newStudent, studentInfo });
  }

  render() {
    if (this.state.newStudent) {
      return <StudentEdit newStudent={this.state.newStudent} />;
    } else if (this.state.studentInfo) {
      return (
        <StudentInfo
          student={this.context.classes.getStudent(
            this.getClassId(),
            this.getStudentId()
          )}
          otherStudents={
            this.context.classes.getById(this.getClassId()).students
          }
        />
      );
    } else {
      return <div>somthing</div>;
    }
  }
}

export default StudentRoute;
