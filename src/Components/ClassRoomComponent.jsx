import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";

import StudentList from "./StudentList";
import { useSelector } from "react-redux";

import { MockedContext } from "../MockedContext";

function ClassRoomComponent(props) {
  const selectedClass = useSelector((state) => state.classes);
  console.log(selectedClass);
  return (
    <div>
      <StudentList
        key={selectedClass.id}
        classId={selectedClass.id}
        students={selectedClass.students}
        chooseStudent={props.chooseStudent}
      />
    </div>
  );
}

export default ClassRoomComponent;
