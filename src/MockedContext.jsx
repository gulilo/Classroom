import React, { createContext } from "react";

import { classes } from "./mockedData/classes";
import { students } from "./mockedData/Students";
import _ from "lodash";

export const MockedContext = createContext();

export const ApiProvider = (props) => {
  const ApiMocked = {
    classes: {
      getAll() {
        return classes;
      },
      getById(classId) {
        return _.find(classes, { id: classId });
      },
      getStudentList(classId) {
        return this.getById(classId).students;
      },
      getStudent(classId, studentId) {
        return _.find(this.getStudentList(classId), { id: studentId });
      },
    },
    student: {
      getAll() {
        return students;
      },
      getStudent(studentId) {
        return _.find(students, { id: studentId });
      },
      getName(studentId) {
        return _.find(students, { id: studentId }).name;
      },
      getLikes(classId, studentId) {
        return _.map(
          ApiMocked.classes.getStudent(classId, studentId).likes,
          (id) => _.find(students, (student) => student.id === id)
        );
      },
      getDislikes(classId, studentId) {
        return _.map(
          ApiMocked.classes.getStudent(classId, studentId).dislike,
          (id) => _.find(students, (student) => student.id === id)
        );
      },
    },
  };
  return (
    <MockedContext.Provider value={ApiMocked}>
      {props.children}
    </MockedContext.Provider>
  );
};
