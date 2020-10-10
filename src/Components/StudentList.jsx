import React from "react";
import { Link, NavLink } from "react-router-dom";

import listStyle from "../cssFiles/ClassroomStyle.module.css";

function StudentItem({ classId, studentId, studentName }) {
  const path =
    (classId !== undefined ? `/classroom/${classId}` : "") +
    `/student/${studentId}`;

  return (
    <li className={listStyle.studentItem} key={studentId}>
      <Link className={listStyle.StudentLink} to={path}>
        {studentName}
      </Link>

      <Link className={listStyle.StudentEditButton} to={`${path}/edit`} />
    </li>
  );
}

function StudentList({ classId, students }) {
  if (students.length === 0) return null;

  return (
    <div>
      <span className={listStyle.studentList}>
        {students.map((student) => (
          <StudentItem
            classId={classId}
            studentId={student.id}
            studentName={student.name}
          />
        ))}
      </span>
    </div>
  );
}

export default StudentList;
