import React, { useState, useEffect } from "react";
import _ from "lodash";
import ClassList from "../Components/ClassList";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import { useAppDispatch } from "../Redax/store";
import { setClass } from "../Classes/ClassSlice";
import { useSelector } from "react-redux";

function ClassListRoute() {
  const dispatch = useAppDispatch();

  const classList = useSelector((state) => state.classList);

  function ChooseClass(classId) {
    const selectedClass = _.find(classList, { id: classId });
    dispatch(setClass(selectedClass));
  }

  return (
    <div className={Style_MainGrid.AppMenuArea1}>
      <ClassList classes={classList} />
    </div>
  );
}

export default ClassListRoute;
