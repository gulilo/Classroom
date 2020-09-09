import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";

import ClassTableStyle from "../cssFiles/ClassroomDataStyle.module.css";

import { MockedContext } from "../MockedContext";

function ClassData(props) {
  const api = useContext(MockedContext);
  const [classData, setClassData] = useState({});

  useEffect(() => {
    const students = [];

    _.forEach(props.classroom.students, (student) => {
      _.forEach(student.likes, (id) => {
        const stud = _.find(students, { id: id });
        if (!stud) {
          students.push({
            id: id,
            name: api.student.getName(id),
            like: 1,
            dislike: 0,
            sum: 1,
          });
        } else {
          stud.like++;
          stud.sum++;
        }
      });
      _.forEach(student.dislike, (id) => {
        const stud = _.find(students, { id: id });
        if (!stud) {
          students.push({
            id: id,
            name: api.student.getName(id),
            like: 0,
            dislike: 1,
            sum: 1,
          });
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

    setClassData({ ghosts, populars, rejected, rest });
  }, [props.classroom]);

  return (
    <div className={ClassTableStyle.ClassMainTable}>
      <h3 className={ClassTableStyle.likedH}>popular:</h3>
      <span className={ClassTableStyle.liked}>
        {_.map(classData.populars, ({ id, name }) => (
          <li key={id}> {name} </li>
        ))}
      </span>

      <h3 className={ClassTableStyle.deslikedH}>rejected:</h3>
      <span className={ClassTableStyle.desliked}>
        {_.map(classData.rejected, ({ id, name }) => (
          <li key={id}>{name} </li>
        ))}
      </span>

      <h3 className={ClassTableStyle.ghostsH}>ghost:</h3>
      <span className={ClassTableStyle.ghosts}>
        {_.map(classData.ghosts, ({ id, name }) => (
          <li key={id}>{name} </li>
        ))}
      </span>

      <h3 className={ClassTableStyle.halfH}>rest:</h3>
      <span className={ClassTableStyle.half}>
        {_.map(classData.rest, ({ id, name }) => (
          <li key={id}>{name} </li>
        ))}
      </span>
    </div>
  );
}

export default ClassData;
