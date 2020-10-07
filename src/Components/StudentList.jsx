import React from "react";
import { Link } from "react-router-dom";

import listStyle from "../cssFiles/ClassroomStyle.module.css";

function StudentList(props) {
  if (props.students.length === 0) return null;

  return (
    <div>
      <span className={listStyle.studentList}>
        {props.students.map((student) => (
          <li className={listStyle.studentItem} key={student.id}>
            <Link
              className={listStyle.StudentLink}
              to={`/classroom/${props.classId}/student/${student.id}`}
              onClick={() => {
                props.chooseStudent(student.id);
              }}
            >
              {student.name}
            </Link>

            <Link
              className={listStyle.StudentEditButton}
              to={`/classroom/${props.classId}/student/${student.id}/edit`}
              onClick={() => {
                props.chooseStudent(student.id);
              }}
            ></Link>
          </li>
        ))}
      </span>
    </div>
  );
}

export default StudentList;
