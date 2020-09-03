import React, { Component } from "react";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import Style_StudnetInfo from "../cssFiles/StudnetInfoStyle.module.css";

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
    const dislikeAndDislikeMe = _.intersection(dislikes, dislikeMe);

    const likeRest = _.difference(likes, likeAndLikeMe, likeAndDislikeMe);
    const dislikeRest = _.difference(
      dislikes,
      dislikeAndLikeMe,
      dislikeAndDislikeMe
    );
      console.log (likeAndDislikeMe)
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
        <div className={Style_StudnetInfo.StudnetInfoGrid}>
        <h3 className={Style_StudnetInfo.likeH}>likes: </h3>
        <span className={Style_StudnetInfo.likeC}>
          {_.map(this.state.likeAndLikeMe, ({ id, name }) => (
            <li className={Style_StudnetInfo.LikeLike} key={id}> {name} </li>
          ))}
          {_.map(this.state.likeRest, ({ id, name }) => (
            <li className={Style_StudnetInfo.LikeNone} key={id}> {name} </li>
          ))}
          {_.map(this.state.likeAndDislikeMe, ({ id, name }) => (
            <li className={Style_StudnetInfo.LikeDislike} key={id}> {name} </li>
          ))}

        </span>
        
        
        <h3 className={Style_StudnetInfo.dislikeH}>dislikes: </h3>
        <span className={Style_StudnetInfo.dislikeC}>
          {_.map(this.state.dislikeAndLikeMe, ({ id, name }) => (
            <li className={Style_StudnetInfo.DislikeLike} key={id}> {name} </li>
          ))}
          {_.map(this.state.dislikeRest, ({ id, name }) => (
            <li className={Style_StudnetInfo.DislikeNone} key={id}> {name} </li>
          ))}
          {_.map(this.state.dislikeAndDislikeMe, ({ id, name }) => (
            <li className={Style_StudnetInfo.DislikeDislike} key={id}> {name} </li>
          ))}
        </span>



        <h3 className={Style_StudnetInfo.RlikeH}>like me: </h3>
        <span className={Style_StudnetInfo.RlikeC}> 
          {_.map(this.state.likeMe, ({ id, name }) => (
            <li key={id}> {name} </li>
          ))}
        </span>
        <h3 className={Style_StudnetInfo.RdislikeH}>dislikes me: </h3>
        <span className={Style_StudnetInfo.RdislikeC}>
          {_.map(this.state.dislikeMe, ({ id, name }) => (
            <li key={id}> {name} </li>
          ))}
        </span>
        </div>
      </div>
    );
  }
}

export default StudentInfo;
