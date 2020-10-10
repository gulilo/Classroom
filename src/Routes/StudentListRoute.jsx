import React from "react";
import { useState, useContext, useEffect } from "react";

import StudentList from "../Components/StudentList";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";

function StudentListRoute() {
  const api = useContext(MockedContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(api.student.getAll());
  });

  return (
    <div className={Style_MainGrid.AppMenuArea1}>
      <span>all students</span>
      <StudentList students={students}></StudentList>
    </div>
  );
}
export default StudentListRoute;