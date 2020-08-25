import React, { Component } from "react";
import buttonStyles from "../cssFiles/simpleButtons.module.css";
import labelStyles from "../cssFiles/StudentEdit.module.css";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

class StudentEdit extends Component {
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
    if (this.props.newStudent) {
      this.setState({ nameEdit: true });
    } else {
      const student = this.props.student;
      const otherStudents = this.props.otherStudents;

      this.setState({ student, otherStudents });
    }
  }

  HandleChangeName = () => {
    const newName = this.nameInput.current.value;

    let student = this.state.student;
    student.name = newName;

    this.setState({ student, nameEdit: false });
  };

  HandleDeleteFromList = (toDelete, list) => {
    const student = this.state.student;
    if (list === "likes") {
      const index = student.likes.indexOf(toDelete);
      if (index > -1) {
        student.likes.splice(index, 1);
      }
    } else {
      const index = student.dislike.indexOf(toDelete);
      if (index > -1) {
        student.dislike.splice(index, 1);
      }
    }

    this.setState({ student });
  };

  HandleAddToList = (studentId, list) => {
    const student = this.state.student;
    const toadd = this.state.otherStudents.find(
      ({ id }) => id === parseInt(studentId, 10)
    );

    if (list === "likes") {
      student.likes.push(toadd);
    } else {
      student.dislike.push(toadd);
    }

    this.setState({ student });
  };

  HandleSave = () => {
    this.props.saveStudent();
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
        <span className={labelStyles.StudentNameBracket}>
          {student.name}
          <button
            className={labelStyles.DeleteButton}
            onClick={(e) => this.HandleDeleteFromList(student, list)}
          ></button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <div className={Style_MainGrid.AppMainArea}>
        {this.state.nameEdit ? (
          <span className={labelStyles.StudentNameBracket}>
            <input
              className={labelStyles.NameLabel}
              type="Text"
              ref={this.nameInput}
              defaultValue={this.state.student.name}
            />
            <button
              className={labelStyles.saveButton}
              onClick={this.HandleChangeName}
            />
          </span>
        ) : (
          <span className={labelStyles.StudentNameBracket}>
            <span className={labelStyles.NameLabel}>
              {this.state.student.name}
            </span>
            <button
              className={labelStyles.editbutton}
              onClick={(e) => {
                this.setState({ nameEdit: true });
              }}
            />
          </span>
        )}
        <br />
        likes:
        <span>
          {this.ShowList("likes")}

          {this.state.student.likes.length < 3 && !this.state.likeAdd ? (
            <li key="addButton">
              <button
                className={buttonStyles.addButton}
                onClick={(e) => {
                  this.setState({ likeAdd: true });
                }}
              />
            </li>
          ) : this.state.likeAdd ? (
            <li key="new">
              <span className={labelStyles.StudentNameBracket}>
                <select
                  className={labelStyles.StudentPicker}
                  ref={this.likeAdd}
                >
                  {this.state.otherStudents.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button
                  className={labelStyles.saveButton}
                  onClick={(e) => {
                    this.HandleAddToList(this.likeAdd.current.value, "likes");
                    this.setState({ likeAdd: false });
                  }}
                />
              </span>
            </li>
          ) : null}
        </span>
        <br />
        dislikes:
        <span>
          {this.ShowList("dislike")}

          {this.state.student.dislike.length < 3 && !this.state.dislikeAdd ? (
            <li key="addButton">
              <button
                className={buttonStyles.addButton}
                onClick={(e) => {
                  this.setState({ dislikeAdd: true });
                }}
              />
            </li>
          ) : this.state.dislikeAdd ? (
            <li key="new">
              <span className={labelStyles.StudentNameBracket}>
                <select
                  className={labelStyles.StudentPicker}
                  ref={this.dislikeAdd}
                >
                  {this.state.otherStudents.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button
                  className={labelStyles.saveButton}
                  onClick={(e) => {
                    this.HandleAddToList(
                      this.dislikeAdd.current.value,
                      "dislike"
                    );
                    this.setState({ dislikeAdd: false });
                  }}
                />
              </span>
            </li>
          ) : null}
        </span>
        <button onClick={this.HandleSave}>save</button>
        <button onClick={this.props.cancel}>cancel</button>
      </div>
    );
  }
}

export default StudentEdit;
