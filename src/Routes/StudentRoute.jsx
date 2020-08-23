import React, { Component } from "react";
import StudentEdit from "../Components/StudentEdit";
import StudentInfo from "../Components/StudentInfo";

class StudentRoute extends Component {
  state = {
    newStudent: false,
    studentInfo: false,
    studentEdit: false,
  };

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
      return <StudentInfo />;
    } else {
      return <div>somthing</div>;
    }
  }
}

export default StudentRoute;
