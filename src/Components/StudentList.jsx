import React, { Component } from "react";

class StudentList extends Component {
  state = {};

  onAdd = () => {
    this.props.onAdd(this.nameInput.value);
    this.nameInput.value = "";
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
