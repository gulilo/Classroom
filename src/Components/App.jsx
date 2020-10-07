import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import NewClass from "./NewClass";
import Options from "./Options";
import StudentRoute from "../Routes/StudentRoute";
import StudentEditRoute from "../Routes/StudentEditRoute";
import ClassListRoute from "../Routes/ClassListRoute";
import ClassroomRoute from "../Routes/ClassroomRoute";
import Greeting from "./Greeting";
import ClassroomDataRoute from "../Routes/ClassroomDataRoute";

import styles_topMenu from "../cssFiles/menuBar.module.css";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../Redax/store";
import { setClassList } from "../ClassList/ClassListSlice";

import { MockedContext } from "../MockedContext";

function App() {
  const api = useContext(MockedContext);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setClassList(api.classes.getAll()));
  }, []);

  return (
    <Router>
      <div className={Style_MainGrid.AppMainGrid}>
        <span className={styles_topMenu.topMenuBar}>
          <NavLink to="/classroom" className={styles_topMenu.topMenuItem}>
            classrooms
          </NavLink>
          <NavLink to="/classroom/new" className={styles_topMenu.topMenuItem}>
            new class
          </NavLink>
          <NavLink to="/options" className={styles_topMenu.topMenuItem}>
            options
          </NavLink>
          <br />
          <Greeting name="Degenerat" />
        </span>
        <Route path="/" exact component={Home} />
        <Route path="/classroom" component={ClassListRoute} />
        <Route path="/classroom/new" exact component={NewClass} />
        <Route
          path="/classroom/:classId"
          exact
          component={ClassroomDataRoute}
        />
        <Route path="/classroom/:classId" component={ClassroomRoute} />
        <Route path="/options" component={Options} />
        <Route
          path="/classroom/:classId/student/:studentId/edit"
          component={StudentEditRoute}
        />
        <Route
          path="/classroom/:classId/student/:studentId"
          exact
          component={StudentRoute}
        />
      </div>
    </Router>
  );
}

export default App;
