import React, { Component } from "react";

class NewClass extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <input
          ref={(ref) => (this.nameInput = ref)}
          type="text"
          name="name"
          onChange={this.handleChange}
        />
        <button onClick={this.onAdd}>add</button>
      </div>
    );
  }
}

export default NewClass;
