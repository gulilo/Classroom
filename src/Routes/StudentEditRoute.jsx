import React, { useContext } from "react";
import _ from "lodash";

import StudentEdit from "../Components/StudentEdit";

import { MockedContext } from "../MockedContext";
import { useState } from "react";
import { useEffect } from "react";

function StudentEditRoute(props) {
  const api = useContext(MockedContext);
  const [student, setStudent] = useState({
    id: -1,
    name: "",
    likes: [],
    dislike: [],
  });
  const [otherStudents, setOtherStudents] = useState([{ id: -1, name: "" }]);

  const getStudentId = () => parseInt(props.match.params.studentId, 10);
  const getClassId = () => parseInt(props.match.params.classId, 10);

  useEffect(async () => {
    const classStudent = await api.classes.getStudent(getClassId(), getStudentId());
  
    const studentLikes = classStudent.likes;
    const studentsDislikes = classStudent.dislike;

    const student = {
      id: classStudent.id,
      name: classStudent.name,
      likes: studentLikes,
      dislike: studentsDislikes,
    };

    const otherStudents = await api.getstudentsName(getClassId());

    setStudent(student);
    setOtherStudents(otherStudents);
  }, [props.match.params.studentId, props.match.params.classId]);

   const saveStudent = async () => {
    if (student.id === -1) {
      return;
    }

    const mockedStudent = await api.student.getStudent(student.id);

    const mockedClassStudent = await api.classes.getStudent(
      getClassId(),
      getStudentId()
    );

    mockedStudent.name = student.name;
    mockedClassStudent.likes = student.likes.map(({ id }) => id);
    mockedClassStudent.dislike = student.dislike.map(({ id }) => id);

    //this.props.history.go(0); // refrash the page
  };

  const handleCancel = async () => {
    if (student.id === -1) {
      return;
    }
    const DBstudent = await api.classes.getStudent(getClassId(),getStudentId()); 
    setStudent((prevStudent) => {
      return {
        ...prevStudent,
        name: DBstudent.name,
        likes: DBstudent.likes,
        dislike: DBstudent.dislike,
      };
    });

    //this.props.history.go(0); // refrash the page
  };

  if (student.id === -1) {
    return null;
  }
  return (
    <StudentEdit
      student={student}
      otherStudents={otherStudents}
      saveStudent={saveStudent}
      cancel={handleCancel}
    />
  );
}

export default StudentEditRoute;
