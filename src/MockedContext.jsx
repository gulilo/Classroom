import React, { createContext } from "react";

import { classes } from "./mockedData/classes";
import { students } from "./mockedData/Students";
import _ from "lodash";

export const MockedContext = createContext();

export const ApiProvider = (props) => {
  const ApiMocked = {
    classes: {
      async getAll() {
        return classes;
      },
      async getById(classId) {
        return _.find(classes, { id: classId });
      },
      async getStudentList(classId) {
        return this.getById(classId).students;
      },
      async getStudent(classId, studentId) {
        const studentData = _.find(this.getStudentList(classId), { id: studentId });
        const studentName = ApiMocked.student.getName(studentId);
        return {id:studentData.id, name:studentName,likes:studentData.likes,dislike:studentData.dislike};
      },
      async getStudentsName(classId){
        const list = await this.getStudentList(classId);
        return Promise.all(_.map(list, ({ id }) =>  ApiMocked.student.getStudent(id))
        );
      }
    },
    student: {
      async getStudent(studentId) {
        return _.find(students, { id: studentId });
      },
      async getName(studentId) {
        return _.find(students, { id: studentId }).name;
      },
      async getLikes(classId, studentId) {
        return _.map(
          ApiMocked.classes.getStudent(classId, studentId).likes,
          (id) => _.find(students, (student) => student.id === id)
        );
      },
      async getDislikes(classId, studentId) {
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
