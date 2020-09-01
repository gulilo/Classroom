import React, { Component } from "react";
import { Link } from "react-router-dom";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import Style_classroomList from "../cssFiles/classroomList.module.css";

class ClassList extends Component {
  state = {};

  render() {
    return (
      <div>
        <span className={Style_classroomList.listStyle}>
          {this.props.classes.map((room) => (
            <li key={room.id} className={Style_classroomList.lineStyle}>
              <Link
                className={Style_classroomList.classLink}
                to={`/classroom/${room.id}`}
              >
                {room.name}{" "}
              </Link>
            </li>
          ))}
        </span>
      </div>
    );
  }
}

export default ClassList;
