import React, { Component } from "react";

import StudentList from "./StudentList";

class ClassRoomComponent extends Component {
  state = {
    classRooms: [
      {
        id: 11,
        name: "a1",
        students: [
          { id: 1, name: "alpha" },
          { id: 2, name: "bravo" },
          { id: 3, name: "chralie" },
          { id: 4, name: "delta" },
          { id: 5, name: "echo" },
          { id: 6, name: "fox" },
        ],
      },
      {
        id: 21,
        name: "b1",
        students: [
          { id: 23, name: "amit" },
          { id: 11, name: "gal" },
          { id: 98, name: "hagit" },
          { id: 99, name: "eli" },
        ],
      },
      {
        id: 22,
        name: "b2",
        students: [
          { id: 26, name: "zulu" },
          { id: 25, name: "yankee" },
          { id: 24, name: "xray" },
          { id: 23, name: "whiskey" },
          { id: 11, name: "victor" },
        ],
      },
    ],
  };

  componentDidMount() {
    const classRooms = [...this.state.classRooms].filter(
      ({ name }) => name === this.props.match.params.name
    );
    this.setState({ classRooms });
  }

  HandleAdd = (studentName) => {
    const students = [...this.state.students];
    students.push({ id: this.state.students.length, name: studentName });
    this.setState({ students });
  };

  render() {
    return (
      <div>
        <h2>class number: {this.state.classRooms[0].name}</h2>
        <StudentList
          key={123}
          students={this.state.classRooms[0].students}
          onAdd={this.HandleAdd}
        ></StudentList>
      </div>
    );
  }
}

export default ClassRoomComponent;
