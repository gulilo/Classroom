import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <ul>
          {this.state.students.map((student) => (
            <li key={student.id}>
              <Link to={`${this.props.classId}/student/${student.id}`}>
                {student.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
