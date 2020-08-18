import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentComponent from "./StudentComponent";


import listStyle from "../ClassroomStyle.module.css";
import Buttons from "../simpleButtons.module.css"

class StudentList extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul className={listStyle.studentList}>
          {this.props.students.map((student) => (
            <li className={listStyle.studentItem} key={student.id}>
              <Link to={`/student/${student.id}`}>{student.name}</Link><Link className={Buttons.editButton} to={`/student/${student.id}/edit`}></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
