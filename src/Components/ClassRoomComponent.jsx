import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";

import StudentList from "./StudentList";

import { MockedContext } from "../MockedContext";

function ClassRoomComponent(props) {
  const api = useContext(MockedContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const students = _.map(
      api.classes.getStudentList(props.classroom.id),
      ({ id }) => api.student.getStudent(id)
    );
    setStudents(students);
  }, [props.classroom]);

  if (students.length === 0) {
    return null;
  }

  return (
    <div>
      <StudentList
        key={props.classroom.id}
        classId={props.classroom.id}
        students={students}
      />
    </div>
  );
}

export default ClassRoomComponent;
