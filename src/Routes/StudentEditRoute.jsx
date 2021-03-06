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

  useEffect(() => {
    const classStudent = api.classes.getStudent(getClassId(), getStudentId());

    const studentLikes = api.student.getLikes(getClassId(), getStudentId());

    const studentsDislikes = api.student.getDislikes(
      getClassId(),
      getStudentId()
    );

    const student = {
      id: classStudent.id,
      name: api.student.getName(getStudentId()),
      likes: studentLikes,
      dislike: studentsDislikes,
    };

    const otherStudents = _.map(
      api.classes.getStudentList(getClassId()),
      ({ id }) => api.student.getStudent(id)
    );
    setStudent(student);
    setOtherStudents(otherStudents);
  }, [props.match.params.studentId, props.match.params.classId]);

  const saveStudent = () => {
    if (student.id === -1) {
      return;
    }

    const mockedStudent = api.student.getStudent(student.id);

    const mockedClassStudent = api.classes.getStudent(
      getClassId(),
      getStudentId()
    );

    mockedStudent.name = student.name;
    mockedClassStudent.likes = student.likes.map(({ id }) => id);
    mockedClassStudent.dislike = student.dislike.map(({ id }) => id);

    //this.props.history.go(0); // refrash the page
  };

  const handleCancel = () => {
    if (student.id === -1) {
      return;
    }

    setStudent((prevStudent) => {
      return {
        ...prevStudent,
        name: api.student.getName(getStudentId()),
        likes: api.student.getLikes(getClassId(), getStudentId()),
        dislike: api.student.getDislikes(getClassId(), getStudentId()),
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
