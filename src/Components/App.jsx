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

import "../menuBar.module.css"

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <topMenuBar>
          <menuItem><NavLink to="/classrooms">classrooms</NavLink></menuItem>
          <NavLink to="/classroom/new">new class</NavLink>  
          <NavLink to="/options">options</NavLink>
          </topMenuBar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/classrooms" exact component={ChooseClass} />
            <Route path="/classroom/new" exact component={NewClass} />
            <Route path="/classroom/:name" component={ClassRoomComponent} />
            <Route path="/options" component={Options} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
