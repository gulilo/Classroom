import React, { Component } from "react";
import { Link } from "react-router-dom";

import listStyle from "../cssFiles/ClassroomStyle.module.css";

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
        <span className={listStyle.studentList}>
          {this.state.students.map((student) => (
            <li className={listStyle.studentItem} key={student.id}>
              <Link
                className={listStyle.StudentLink}
                to={`/classroom/${this.props.classId}/student/${student.id}`}
              >
                {student.name}
              </Link>

              <Link
                className={listStyle.StudentEditButton}
                to={`/classroom/${this.props.classId}/student/${student.id}/edit`}
              ></Link>
            </li>
          ))}
        </span>
      </div>
    );
  }
}

export default StudentList;
