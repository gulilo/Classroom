import React, { Component } from "react";

class NewStudent extends Component {
  state = {};

  handleCreate = () => {
    const student = { id: this.idInput.value, name: this.nameInput.value };
    console.log(student);
  };

  render() {
    return (
      <div>
        student id:
        <input type="number" ref={(ref) => (this.idInput = ref)}></input>
        student name:
        <input type="text" ref={(ref) => (this.nameInput = ref)}></input>
        <button onClick={this.handleCreate}>create</button>
      </div>
    );
  }
}

export default NewStudent;
