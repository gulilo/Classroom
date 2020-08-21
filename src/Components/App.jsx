import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ChooseClass from "./ChooseClass";
import ClassRoomComponent from "./ClassRoomComponent";
import Home from "./Home";
import NewClass from "./NewClass";
import Options from "./Options";
import NewStudent from "./NewStudent";
import StudentEdit from "./StudentEdit";
import StudentInfo from "./StudentInfo";

import styles_topMenu from "../cssFiles/menuBar.module.css";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className={Style_MainGrid.AppMainGrid}>
          <menuBar className={styles_topMenu.topMenuBar}>
          <NavLink to="/classrooms" className={styles_topMenu.topMenuItem}>classrooms</NavLink>
          <NavLink to="/classroom/new" className={styles_topMenu.topMenuItem}>new class</NavLink>  
          <NavLink to="/options" className={styles_topMenu.topMenuItem}>options</NavLink>
          </menuBar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/classrooms" exact component={ChooseClass} />
            <Route path="/classroom/new" exact component={NewClass} />
            <Route path="/classroom/:name" component={ClassRoomComponent} />
            <Route path="/options" component={Options} />
            <Route path="/student/new" exact component={NewStudent} />
            <Route path="/student/:id" exact component={StudentInfo} />
            <Route path="/student/:id/edit" exact component={StudentEdit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
