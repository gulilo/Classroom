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
    const otherStudents = this.props.otherStudents;

    const likes = _.map(student.likes, (id) => api.student.getStudent(id));
    const dislikes = _.map(student.dislike, (id) => api.student.getStudent(id));

    const likeMe = _.map(
      _.filter(otherStudents, ({ likes }) =>
        _.find(likes, (id) => {
          return student.id === id;
        })
      ),
      ({ id }) => api.student.getStudent(id)
    );

    const dislikeMe = _.map(
      _.filter(otherStudents, ({ dislike }) =>
        _.find(dislike, (id) => {
          return student.id === id;
        })
      ),
      ({ id }) => api.student.getStudent(id)
    );

    const likeAndLikeMe = _.intersection(likes, likeMe);
    const likeAndDislikeMe = _.intersection(likes, dislikeMe);
    const dislikeAndLikeMe = _.intersection(dislikes, likeMe);
    const dislikeAndDislikeMe = _.intersection(likes, dislikeMe);

    const likeRest = _.difference(likes, likeAndLikeMe, likeAndDislikeMe);
    const dislikeRest = _.difference(
      dislikes,
      dislikeAndLikeMe,
      dislikeAndDislikeMe
    );

    this.setState({
      likes,
      dislikes,
      likeMe,
      dislikeMe,

      likeAndLikeMe,
      likeAndDislikeMe,
      dislikeAndLikeMe,
      dislikeAndDislikeMe,
      likeRest,
      dislikeRest,
    });
  }

  render() {
    return (
      <div className={Style_MainGrid.AppMainAreaOut}>
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
