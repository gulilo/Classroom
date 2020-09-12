import React from "react";
import { Link } from "react-router-dom";

import Style_classroomList from "../cssFiles/classroomList.module.css";

function ClassList(props) {
  return (
    <div>
      <span className={Style_classroomList.listStyle}>
        {props.classes.map((room) => (
          <li key={room.id} className={Style_classroomList.lineStyle}>
            
            <Link
              className={Style_classroomList.classLink}
              to={`/classroom/${room.id}`}
            >
              {room.name}
            </Link>
          </li>
        ))}
      </span>
    </div>
  );
}

export default ClassList;
