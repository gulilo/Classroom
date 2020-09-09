import React, { useState, useContext, useEffect } from "react";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import ClassData from "../Components/ClassData";

import { MockedContext } from "../MockedContext";

function ClassroomDataRoute(props) {
  const api = useContext(MockedContext);
  const [classroom, setClassroom] = useState({
    id: -1,
    name: "bla",
    students: [],
  });

  const getClassId = () => parseInt(props.match.params.classId, 10);

  useEffect(() => {
    const classroom = api.classes.getById(getClassId());
    setClassroom(classroom);
  }, [props.match.params.classId]);

  if (classroom.id === -1) {
    return null;
  }
  return (
    <div className={Style_MainGrid.appClassroomArea}>
      <div className={Style_MainGrid.AppMainArea}>
        <ClassData classroom={classroom} />
      </div>
    </div>
  );
}

export default ClassroomDataRoute;
