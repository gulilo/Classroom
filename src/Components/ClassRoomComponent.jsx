import React, { Component } from "react";
import StudentList from "./StudentList";
import Style_classroomList from "../cssFiles/classroomList.module.css";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { classes } from "../mockedData/classes";

class ClassRoomComponent extends Component {
  state = { classRooms: { id: -1, name: "bla", students: [] } };

  componentDidMount() {
    const classRooms = classes.find(
      ({ id }) => id == this.props.match.params.classId
    );

    this.setState({ classRooms });
  }

  HandleAdd = (studentName) => {
    const students = [...this.state.students];
    students.push({ id: this.state.students.length, name: studentName });
    this.setState({ students });
  };

  render() {
    if (this.state.classRooms.id === -1) return null;

    return (
      <div className={Style_MainGrid.AppMainArea}>
        <h2>class name: {this.state.classRooms.name}</h2>
        <StudentList
          key={123}
          classId={this.state.classRooms.id}
          students={this.state.classRooms.students}
          onAdd={this.HandleAdd}
        />
      </div>
    );
  }
}

export default ClassRoomComponent;
