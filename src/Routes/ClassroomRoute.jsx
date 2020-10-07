import React, { useContext } from "react";
import _ from "lodash";
import ClassRoomComponent from "../Components/ClassRoomComponent";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import { setClass } from "../Classes/ClassSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../Redax/store";
import { setStudent } from "../Studnet/StudentSlice";

import { MockedContext } from "../MockedContext";
import { useEffect } from "react";

function ClassroomRoute(props) {
  const api = useContext(MockedContext);

  const dispatch = useAppDispatch();
  const classList = useSelector((state) => state.classList);

  const selectedClass = useSelector((state) => state.classes);

  const thisClassId = parseInt(props.match.params.classId, 10);

  useEffect(() => {
    const selectedClass = api.classes.getClassWithNames(thisClassId);
    dispatch(setClass(selectedClass));
  }, []);

  function chooseStudent(studentId) {
    console.log(studentId);
    const selectedStudent = _.find(selectedClass.students, { id: studentId })
      .name;
    dispatch(setStudent(selectedStudent));
  }

  if (selectedClass.id === -1) {
    const selectedClass = api.classes.getClassWithNames(thisClassId);
    dispatch(setClass(selectedClass));
  }

  return (
    <div className={Style_MainGrid.appClassroomArea}>
      <div className={Style_MainGrid.AppMenuArea2}>
        <ClassRoomComponent
          classroom={selectedClass}
          chooseStudent={chooseStudent}
        />
      </div>
    </div>
  );
}

export default ClassroomRoute;
