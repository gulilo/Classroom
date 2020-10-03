import React from "react";
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

import { ApiProvider } from "../MockedContext";
import StudentListRoute from "../Routes/StudentListRoute";
import StudentInfoRoute from "../Routes/StudentInfoRoute";

function App() {
  return (
    <ApiProvider>
      <Router>
        <div className={Style_MainGrid.AppMainGrid}>
          <span className={styles_topMenu.topMenuBar}>
            <NavLink to="/classroom" className={styles_topMenu.topMenuItem}>
              groups
            </NavLink>
            <NavLink to="/student" className={styles_topMenu.topMenuItem}>
              student list
            </NavLink>

            <br />
            <Greeting name="Degenerat" />

            <NavLink to="/classroom/new" className={styles_topMenu.topMenuItem}>
              logout
            </NavLink>
            <NavLink to="/classroom/new" className={styles_topMenu.topMenuItem}>
              change class
            </NavLink>
            <NavLink to="/options" className={styles_topMenu.topMenuItem}>
              options
            </NavLink>
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
          <Route path="/student" component={StudentListRoute} />
          <Route path="/student/:studentId" component={StudentInfoRoute} />
        </div>
      </Router>
    </ApiProvider>
  );
}

export default App;
