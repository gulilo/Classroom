import React from "react";
import { Link, NavLink } from "react-router-dom";

import listStyle from "../cssFiles/ClassroomStyle.module.css";

function StudentList(props) {
  if (props.students.length === 0) return null;

  return (
    <div>
      <span className={listStyle.studentList}>
        {props.students.map((student) => (

            <NavLink
              className={listStyle.studentItem}
              activeClassName={listStyle.activeStudent}
              to={`/classroom/${props.classId}/student/${student.id}`}
            >
              <span className={listStyle.StudentLink}>{student.name}</span>

              <Link
              className={listStyle.StudentEditButton}
              to={`/classroom/${props.classId}/student/${student.id}/edit`}
            ></Link>

            </NavLink>


        ))}
      </span>
    </div>
  );
}

export default StudentList;
