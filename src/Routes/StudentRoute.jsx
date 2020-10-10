import React, { useContext } from "react";

import StudentInfo from "../Components/ClassStudentInfo";
import { MockedContext } from "../MockedContext";

function StudentRoute(props) {
  const api = useContext(MockedContext);

  const getStudentId = () => parseInt(props.match.params.studentId, 10);
  const getClassId = () => parseInt(props.match.params.classId, 10);

  return (
    <StudentInfo
      student={api.classes.getStudent(getClassId(), getStudentId())}
      otherStudents={api.classes.getStudentList(getClassId())}
    />
  );
}

export default StudentRoute;
