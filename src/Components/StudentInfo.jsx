import React, { Component } from "react";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

import { MockedContext } from "../MockedContext";

import _ from "lodash";

class StudentInfo extends Component {
  static contextType = MockedContext;

  state = {};

  componentDidMount() {
    const api = this.context;
    const student = this.props.student;

    const likes = _.map(student.likes, (id) => api.student.getStudent(id));
    const dislikes = _.map(student.dislike, (id) => api.student.getStudent(id));

    const likeMe = _.map(
      _.filter(api.classes.getStudentList(this.props.classId), ({ likes }) =>
        _.find(likes, (id) => {
          return student.id === id;
        })
      ),
      ({ id }) => api.student.getStudent(id)
    );

    const dislikeMe = _.map(
      _.filter(api.classes.getStudentList(this.props.classId), ({ dislike }) =>
        _.find(dislike, (id) => {
          return student.id === id;
        })
      ),
      ({ id }) => api.student.getStudent(id)
    );

    console.log(dislikeMe);

    this.setState({ likes, dislikes, likeMe, dislikeMe });
  }

  render() {
    return (
      <div className={Style_MainGrid.AppMainArea}>
        <h3>likes: </h3>
        <span>
          {_.map(this.state.likes, ({ id, name }) => (
            <li key={id}> {name} </li>
          ))}
        </span>
        <h3>dislikes: </h3>
        <span>
          {_.map(this.state.dislikes, ({ id, name }) => (
            <li key={id}> {name} </li>
          ))}
        </span>
        <h3>like me: </h3>
        <span>
          {_.map(this.state.likeMe, ({ id, name }) => (
            <li key={id}> {name} </li>
          ))}
        </span>
        <h3>dislikes me: </h3>
        <span>
          {_.map(this.state.dislikeMe, ({ id, name }) => (
            <li key={id}> {name} </li>
          ))}
        </span>
      </div>
    );
  }
}

export default StudentInfo;
