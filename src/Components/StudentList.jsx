import React, { Component } from "react";
import { Link } from "react-router-dom";

import listStyle from "../ClassroomStyle.module.css";
import Buttons from "../simpleButtons.module.css";

class StudentList extends Component {
  state = { students: [] };

  componentDidMount() {
    const students = this.props.students;
    this.setState({ students });
  }

  render() {
    if (this.state.students.length === 0) return null;
    return (
      <div>
        <ul className={listStyle.studentList}>
          {this.state.students.map((student) => (
            <li className={listStyle.studentItem} key={student.id}>
              <Link to={`${this.props.classId}/student/${student.id}`}>
                {student.name}
              </Link>
              <Link
                className={Buttons.editButton}
                to={`${this.props.classId}/student/${student.id}/edit`}
              ></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
