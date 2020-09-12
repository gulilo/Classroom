import React from "react";
import { Link } from "react-router-dom";

import listStyle from "../cssFiles/ClassroomStyle.module.css";

function StudentList(props) {
  if (props.students.length === 0) return null;

  return (
    <div>
      <span className={listStyle.studentList}>
        {props.students.map((student,i) => (
          <li className={listStyle.studentItem} key={student.id}
          style={{animationDelay: ((i+1)/20)+"s"}}>
            <Link
              className={listStyle.StudentLink}
              to={`/classroom/${props.classId}/student/${student.id}`}
            >
              {student.name}
            </Link>

            <Link
              className={listStyle.StudentEditButton}
              to={`/classroom/${props.classId}/student/${student.id}/edit`}
            ></Link>
          </li>
        ))}
      </span>
    </div>
  );
}

export default StudentList;
