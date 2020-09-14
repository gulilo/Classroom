import React, { useState, useContext, useEffect } from "react";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import ClassData from "../Components/ClassData";

import { MockedContext } from "../MockedContext";

function ClassroomDataRoute(props) {
  const api = useContext(MockedContext);
  const [classroom, setClassroom] = useState([]);

  useEffect(() => {
    console.log(props.match.params.classId);
    function getClassId() {
      return parseInt(props.match.params.classId, 10);
    }
    (async function readClassData() {
      const students = await api.classes.getStudentListWithName(getClassId());
      setClassroom(students);
    })();
  }, [props.match.params.classId, api.classes]);

  if (classroom.id === -1) {
    return null;
  }
  console.log(classroom);
  return (
    <div className={Style_MainGrid.appClassroomArea}>
      <div className={Style_MainGrid.AppMainArea}>
        {/*<ClassData classroom={classroom} />*/}
      </div>
    </div>
  );
}

export default ClassroomDataRoute;
