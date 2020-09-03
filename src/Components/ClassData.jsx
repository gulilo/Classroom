import React, { Component } from "react";
import _ from "lodash";

import ClassTableStyle from "../cssFiles/ClassroomDataStyle.module.css";

import { MockedContext } from "../MockedContext";

class ClassData extends Component {
  static contextType = MockedContext;

  state = { students: [], ghosts: [] };

  init = () => {
    const classroom = this.props.classroom;

    const students = [];

    _.forEach(classroom.students, (student) => {
      _.forEach(student.likes, (like) => {
        const stud = _.find(students, { id: like });
        if (!stud) {
          students.push({ id: like, like: 1, dislike: 0, sum: 1 });
        } else {
          stud.like++;
          stud.sum++;
        }
      });
      _.forEach(student.dislike, (dislike) => {
        const stud = _.find(students, { id: dislike });
        if (!stud) {
          students.push({ id: dislike, like: 0, dislike: 1, sum: 1 });
        } else {
          stud.dislike++;
          stud.sum++;
        }
      });
    });

    const ghosts = _.filter(students, ({ sum }) => sum <= 2);

    const populars = _.filter(
      _.difference(students, ghosts),
      ({ like, dislike }) => like >= dislike * 2
    );

    const rejected = _.filter(
      _.difference(students, _.union(ghosts, populars)),
      ({ like, dislike }) => dislike >= like * 2
    );

    const rest = _.difference(students, _.union(ghosts, populars, rejected));

    this.setState({ students, ghosts, populars, rejected, rest });
  };

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.classroom.id !== this.props.classroom.id) {
      this.init();
    }
  }

  render() {
    return (
      <div className={ClassTableStyle.ClassMainTable}>
        <h3 className={ClassTableStyle.likedH}>popular:</h3>
        <span className={ClassTableStyle.liked}>
          {_.map(this.state.populars, ({ id }) => (
            <li key={id}> {this.context.student.getName(id)} </li>
          ))}
        </span>

        <h3 className={ClassTableStyle.deslikedH}>rejected:</h3>
        <span className={ClassTableStyle.desliked}>
          {_.map(this.state.rejected, ({ id }) => (
            <li key={id}>{this.context.student.getName(id)} </li>
          ))}
        </span>

        <h3 className={ClassTableStyle.ghostsH}>ghost:</h3>
        <span className={ClassTableStyle.ghosts}>
          {_.map(this.state.ghosts, ({ id }) => (
            <li key={id}>{this.context.student.getName(id)} </li>
          ))}
        </span>

        <h3 className={ClassTableStyle.halfH}>rest:</h3>
        <span className={ClassTableStyle.half}>
          {_.map(this.state.rest, ({ id }) => (
            <li key={id}>{this.context.student.getName(id)} </li>
          ))}
        </span>
      </div>
    );
  }
}

export default ClassData;
