import React, { Component } from "react";
import { Link } from "react-router-dom";
import { classes } from "../mockedData/classes";

class ChooseClass extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul>
          {classes.map((room) => (
            <li key={room.id}>
              <Link to={`/classroom/${room.id}`}>{room.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChooseClass;
