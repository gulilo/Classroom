import React, { Component } from "react";
import { Link } from "react-router-dom";

class ClassList extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul>
          {this.props.classes.map((room) => (
            <li key={room.id}>
              <Link to={`/classroom/${room.id}`}>{room.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassList;
