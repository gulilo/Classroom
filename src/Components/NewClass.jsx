import React, { Component } from "react";

class NewClass extends Component {
  state = {};

  onAdd = () => {
    this.props.onAdd(this.nameInput.value);
    this.nameInput.value = "";
  };

  render() {
    return (
      <div>
        <input type="text"></input>
        <input ref={(ref) => (this.nameInput = ref)} type="text" name="name" />
        <button onClick={this.onAdd}>add</button>
      </div>
    );
  }
}

export default NewClass;
