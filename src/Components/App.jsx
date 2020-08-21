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

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <NavLink to="/classrooms">classrooms</NavLink>
          <NavLink to="/classroom/new">new class </NavLink>
          <NavLink to="/options">options</NavLink>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/classrooms" exact component={ChooseClass} />
            <Route path="/classroom/new" exact component={NewClass} />
            <Route
              path="/classroom/:classId"
              exact
              component={ClassRoomComponent}
            />
            <Route path="/options" component={Options} />
            <Route
              path="/classroom/:classId/student/new"
              exact
              component={NewStudent}
            />
            <Route
              path="/classroom/:classId/student/:studentId"
              exact
              component={StudentInfo}
            />
            <Route
              path="/classroom/:classId/student/:studentId/edit"
              exact
              component={StudentEdit}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
