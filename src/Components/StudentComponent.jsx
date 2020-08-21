import React, { Component } from "react";
import buttonStyles from "../simpleButtons.module.css";
import { classes } from "../mockedData/classes";
import { students } from "../mockedData/Students";

class StudentComponent extends Component {
  state = {
    student: { id: -1, name: "", likes: [], dislike: [] },
    otherStudents: [{ id: -1, name: "" }],

    nameEdit: false,
    likeAdd: false,
    dislikeAdd: false,
  };

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.likeAdd = React.createRef();
    this.dislikeAdd = React.createRef();
  }

  componentDidMount() {
    const classStudent = classes
      .find(({ id }) => id == this.props.match.params.classId)
      .students.find(({ id }) => id == this.props.match.params.studentId);

    const studentLikes = students.filter(({ id }) =>
      classStudent.likes.find((student) => student === id)
    );

    const studentsDislikes = students.filter(({ id }) =>
      classStudent.dislike.find((student) => student === id)
    );

    const student = {
      id: classStudent.id,
      name: students.find(({ id }) => id == classStudent.id).name,
      likes: studentLikes,
      dislike: studentsDislikes,
    };

    const otherStudents = students.filter(({ id }) =>
      classes
        .find(({ id }) => id == this.props.match.params.classId)
        .students.find((student) => student.id === id)
    );

    this.setState({ student, otherStudents });
  }

  HundleDone = () => {
    const newName = this.nameInput.current.value;

    let student = this.state.student;
    student.name = newName;

    students.find(({ id }) => id == student.id).name = newName;

    this.setState({ student, nameEdit: false });
  };

  HandleDelete = (toDelete, list) => {
    const student = this.state.student;
    console.log(list);
    if (list === "likes") {
      const index = student.likes.indexOf(toDelete);
      if (index > -1) {
        student.likes.splice(index, 1);

        classes
          .find(({ id }) => id == this.props.match.params.classId)
          .students.find(({ id }) => id == this.props.match.params.studentId)
          .likes.splice(index, 1);
      }
    } else {
      const index = student.dislike.indexOf(toDelete);
      if (index > -1) {
        student.dislike.splice(index, 1);

        classes
          .find(({ id }) => id == this.props.match.params.classId)
          .students.find(({ id }) => id == this.props.match.params.studentId)
          .dislike.splice(index, 1);
      }
    }

    this.setState({ student });
  };

  HandleSave = (studentId, list) => {
    const student = this.state.student;
    const toadd = students.find(({ id }) => id == studentId);

    if (list === "likes") {
      student.likes.push(toadd);
      classes
        .find(({ id }) => id == this.props.match.params.classId)
        .students.find(({ id }) => id == this.props.match.params.studentId)
        .likes.push(toadd.id);
    } else {
      student.dislike.push(toadd);

      classes
        .find(({ id }) => id == this.props.match.params.classId)
        .students.find(({ id }) => id == this.props.match.params.studentId)
        .dislike.push(toadd.id);
    }

    this.setState({ student });
  };

  ShowList = (list) => {
    var arr;
    if (list === "likes") {
      arr = this.state.student.likes;
    } else {
      arr = this.state.student.dislike;
    }

    return arr.map((student) => (
      <li key={`${student.id}`}>
        <span>
          {student.name}
          <button
            className={buttonStyles.deleteButton}
            onClick={(e) => this.HandleDelete(student, list)}
          ></button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <div>
        {this.state.nameEdit ? (
          <span>
            <input
              type="Text"
              ref={this.nameInput}
              defaultValue={this.state.student.name}
            />
            <button
              className={buttonStyles.saveButton}
              onClick={this.HundleDone}
            />
          </span>
        ) : (
          <span>
            {this.state.student.name}
            <button
              className={buttonStyles.editButton}
              onClick={(e) => {
                this.setState({ nameEdit: true });
              }}
            />
          </span>
        )}
        <br />
        likes:
        <ul>
          {this.ShowList("likes")}

          {this.state.student.likes.length < 3 && !this.state.likeAdd ? (
            <li key="addButton">
              <button
                className={buttonStyles.plusButton}
                onClick={(e) => {
                  this.setState({ likeAdd: true });
                }}
              />
            </li>
          ) : this.state.likeAdd ? (
            <li key="new">
              <span>
                <select ref={this.likeAdd}>
                  {this.state.otherStudents.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button
                  className={buttonStyles.saveButton}
                  onClick={(e) => {
                    this.HandleSave(this.likeAdd.current.value, "likes");
                    this.setState({ likeAdd: false });
                  }}
                />
              </span>
            </li>
          ) : null}
        </ul>
        <br />
        dislikes:
        <ul>
          {this.ShowList("dislike")}

          {this.state.student.dislike.length < 3 && !this.state.dislikeAdd ? (
            <li key="addButton">
              <button
                className={buttonStyles.plusButton}
                onClick={(e) => {
                  this.setState({ dislikeAdd: true });
                }}
              />
            </li>
          ) : this.state.dislikeAdd ? (
            <li key="new">
              <span>
                <select ref={this.dislikeAdd}>
                  {this.state.otherStudents.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button
                  className={buttonStyles.saveButton}
                  onClick={(e) => {
                    this.HandleSave(this.dislikeAdd.current.value, "dislike");
                    this.setState({ dislikeAdd: false });
                  }}
                />
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default StudentComponent;
