import React, { useEffect, useContext, useState } from "react";

import ClassRoomComponent from "../Components/ClassRoomComponent";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";

function ClassroomRoute(props) {
  const api = useContext(MockedContext);
  const [classroom, setClassroom] = useState({
    id: -1,
    name: "bla",
    students: [],
  });

  const getClassId = () => parseInt(props.match.params.classId, 10);

  useEffect(() => {
    (async function readClassStudentList() {
      const classroom = await api.classes.getById(getClassId());
      setClassroom(classroom);
    })();
  }, [props.match.params.classId]);

  if (classroom.id === -1) {
    return null;
  }

  return (
    <div className={Style_MainGrid.appClassroomArea}>
      <div className={Style_MainGrid.AppMenuArea2}>
        <ClassRoomComponent classroom={classroom} />
      </div>
    </div>
  );
}

export default ClassroomRoute;
