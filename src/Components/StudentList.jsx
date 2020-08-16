import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentComponent from "./StudentComponent";

class StudentList extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul>
          {this.props.students.map((student) => (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
