import React, { Component } from "react";
import { Link } from "react-router-dom";


import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import Style_classroomList from "../cssFiles/classroomList.module.css";


class ChooseClass extends Component {
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
  render() {
    return (
      <div className={Style_MainGrid.AppMainArea}>
        <ul className={Style_classroomList.listStyle}>
          {this.state.classRooms.map((room) => (
            <li className={Style_classroomList.lineStyle}>
              <Link className={Style_classroomList.classLink} to={`/classroom/${room.name}`}>{room.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChooseClass;
