import React, { Component } from "react";
import { Link } from "react-router-dom";
import { classes } from "../mockedData/classes";


import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import Style_classroomList from "../cssFiles/classroomList.module.css";


class ChooseClass extends Component {
  state = {};
  render() {
    return (
      <div className={Style_MainGrid.AppMainArea}>
        <span className={Style_classroomList.listStyle}>
        {classes.map((room) => (
            <li key={room.id} className={Style_classroomList.lineStyle}>
              <Link className={Style_classroomList.classLink} to={`/classroom/${room.id}`}>{room.name} </Link>
            </li>
          ))}
        </span>
      </div>
    );
  }
}

export default ChooseClass;
