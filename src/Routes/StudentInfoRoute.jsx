import React, { useEffect, useContext, useState } from "react";
import StudentInfo from "../Components/ClassStudentInfo";
import _ from "lodash";
import { MockedContext } from "../MockedContext";

export default function StudentInfoRoute(props) {
  const api = useContext(MockedContext);
  const [student, setStudent] = useState({});

  const getStudentId = () => parseInt(props.match.params.studentId, 10);

  useEffect(() => {
    const temp = api.student.getStudent(getStudentId());
    const allClasses = api.classes.getAll();
    const studentClasses = [];
    _.forEach(allClasses, (value) => {
      if (_.some(value.students, { id: temp.id })) {
        studentClasses.push({ id: value.id, name: value.name });
      }
    });
    setStudent({ ...temp, classes: studentClasses });
  }, []);

  return <StudentInfo student={student} />;
}