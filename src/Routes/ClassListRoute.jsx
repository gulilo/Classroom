import React, { useContext, useState, useEffect } from "react";

import ClassList from "../Components/ClassList";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";

function ClassListRoute() {
  const api = useContext(MockedContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(api.classes.getAll());
  }, [classes]);

  return (
    <div className={Style_MainGrid.AppMenuArea1}>
      <ClassList classes={classes} />
    </div>
  );
}

export default ClassListRoute;
