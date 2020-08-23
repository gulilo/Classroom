import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import NewClass from "./NewClass";
import Options from "./Options";
import StudentRoute from "../Routes/StudentRoute";
import StudentEditRoute from "../Routes/StudentEditRoute";
import ClassListRoute from "../Routes/ClassListRoute";
import ClassroomRoute from "../Routes/ClassroomRoute";

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
            <Route path="/classrooms" exact component={ClassListRoute} />
            <Route path="/classroom/new" exact component={NewClass} />
            <Route
              path="/classroom/:classId"
              exact
              component={ClassroomRoute}
            />
            <Route path="/options" component={Options} />
            <Route
              path="/classroom/:classId/student/:studentId/edit"
              component={StudentEditRoute}
            ></Route>
            <Route
              path="/classroom/:classId/student/:studentId"
              component={StudentRoute}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
