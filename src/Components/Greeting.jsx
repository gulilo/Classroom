import React, { Component } from "react";

class Greeting extends Component {
  state = {};

  timeOfDay = () => {
    var hr = new Date().getHours();
    if (hr >= 7 && hr < 12) return "Good Morning";
    else if (hr >= 12 && hr < 16) return "It's High Noon";
    else if (hr >= 16 && hr < 19) return "Happy Afternoon";
    else if (hr >= 19 && hr < 22) return "Good Evening";
    else if (hr >= 22 || hr < 7) return "Why are you not sleeping?";
    return "hello";
  };

  render() {
    return (
      <div>
        <span>
          {this.timeOfDay()} {this.props.name}
        </span>
      </div>
    );
  }
}

export default Greeting;
