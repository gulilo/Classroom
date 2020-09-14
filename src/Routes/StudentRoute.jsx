import React, { useContext, useEffect, useState } from "react";

import StudentInfo from "../Components/StudentInfo";
import { MockedContext } from "../MockedContext";

function StudentRoute(props) {
  const api = useContext(MockedContext);

  const [student, setStudent] = useState({id:-1})
  const [otherStudents, setOtherStudents] = useState([]);


  const getStudentId = () => parseInt(props.match.params.studentId, 10);
  const getClassId = () => parseInt(props.match.params.classId, 10);

  useEffect(async ()=>{ 
    setStudent(await api.classes.getStudent(getClassId(), getStudentId()));
    setOtherStudents(await api.classes.getStudentList(getClassId()));

  })

  return (
    <StudentInfo
      student={student}
      otherStudents={otherStudents}
    />
  );
}

export default StudentRoute;
