import React from "react";
import { Link, NavLink } from "react-router-dom";

import Style_classroomList from "../cssFiles/classroomList.module.css";

function ClassList(props) {
  return (
    <div>
      <span className={Style_classroomList.listStyle}>
        {props.classes.map((room) => (
          
            <NavLink
            className={Style_classroomList.lineStyle}
            activeClassName={Style_classroomList.activeClass}
              to={`/classroom/${room.id}`}
            >
              
              {room.name}
              
            </NavLink>

        ))}
      </span>
    </div>
  );
}

export default ClassList;
