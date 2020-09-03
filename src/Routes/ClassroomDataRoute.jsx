import React, { Component } from "react";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import ClassData from "../Components/ClassData";
import { MockedContext } from "../MockedContext";

class ClassroomDataRoute extends Component {
  static contextType = MockedContext;

  state = { classroom: { id: -1, name: "bla", students: [] } };

  getClassId = () => parseInt(this.props.match.params.classId, 10);

  init = () => {
    const classroom = this.context.classes.getById(this.getClassId());
    this.setState({ classroom });
  };

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.classId !== this.props.match.params.classId) {
      this.init();
    }
  }

  render() {
    if (this.state.classroom.id === -1) {
      return null;
    }
    return (
      <div className={Style_MainGrid.appClassroomArea}>
        <div className={Style_MainGrid.AppMainArea}>
          <ClassData classroom={this.state.classroom} />
        </div>
      </div>
    );
  }
}

export default ClassroomDataRoute;
