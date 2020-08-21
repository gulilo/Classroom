import React, { Component } from "react";
import { Link } from "react-router-dom";

import listStyle from "../cssFiles/ClassroomStyle.module.css";
import Buttons from "../cssFiles/simpleButtons.module.css";
import { students as StudentsList } from "../mockedData/Students";

class StudentList extends Component {
  state = { students: [{ id: -1, name: "" }] };

  componentDidMount() {
    const students = StudentsList.filter(({ id }) =>
      this.props.students.find((student) => student.id === id)
    );

    this.setState({ students });
  }

  render() {
    if (this.state.students[0].id === -1) return null;
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
