import React, { Component } from "react";
import _ from "lodash";

import buttonStyles from "../cssFiles/simpleButtons.module.css";
import labelStyles from "../cssFiles/StudentEdit.module.css";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

class NameItem extends Component {
  state = { edit: false };

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  render() {
    if (!this.state.edit) {
      return (
        <span className={labelStyles.StudentNameBracket}>
          <span className={labelStyles.NameLabel}>
            {this.props.student.name}
          </span>
          <button
            className={labelStyles.editbutton}
            onClick={(e) => {
              this.setState({ edit: true });
            }}
          />
        </span>
      );
    } else {
      return (
        <span className={labelStyles.StudentNameBracket}>
          <input
            className={labelStyles.NameLabel}
            type="Text"
            ref={this.nameInput}
            defaultValue={this.props.student.name}
          />
          <button
            className={labelStyles.saveButton}
            onClick={() => {
              this.props.onChangeName(this.nameInput.current.value);
              this.setState({ edit: false });
            }}
          />
        </span>
      );
    }
  }
}

class ListItem extends Component {
  state = {};

  render() {
    if (!this.props.student) {
      return null;
    }
    return (
      <span className={labelStyles.StudentNameBracket}>
        {this.props.student.name}
        <button
          className={labelStyles.DeleteButton}
          onClick={(e) => this.props.onDelete()}
        ></button>
      </span>
    );
  }
}

class AddItem extends Component {
  state = { add: false };

  constructor(props) {
    super(props);
    this.selector = React.createRef();
  }

  render() {
    if (!this.state.add) {
      return (
        <button
          className={buttonStyles.addButton}
          onClick={(e) => {
            this.setState({ add: true });
          }}
        />
      );
    } else {
      return (
        <span className={labelStyles.StudentNameBracket}>
          <select className={labelStyles.StudentPicker} ref={this.selector}>
            {this.props.otherStudents.map(({ id, name }) => (
              <option value={id}>{name}</option>
            ))}
          </select>
          <button
            className={labelStyles.saveButton}
            onClick={(e) => {
              this.props.onSave(this.selector.current.value);
              this.setState({ add: false });
            }}
          />
        </span>
      );
    }
  }
}

class StudentEdit extends Component {
  state = {
    student: { id: -1, name: "", likes: [], dislike: [] },
    otherStudents: [{ id: -1, name: "" }],
  };

  init = () => {
    const student = this.props.student;
    const otherStudents = this.props.otherStudents;

    this.setState({ student, otherStudents });
  };

  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.student.id !== this.props.student.id) {
      this.init();
    }
  }

  HandleChangeName = (newName) => {
    let student = this.state.student;
    student.name = newName;

    this.setState({ student, nameEdit: false });
  };

  HandleDeleteFromList = (toDelete, list) => {
    const student = this.state.student;
    if (list === "likes") {
      _.remove(student.likes, { id: toDelete });
    } else {
      _.remove(student.dislike, { id: toDelete });
    }

    this.setState({ student });
  };

  HandleAddToList = (studentId, list) => {
    const student = this.state.student;
    const toadd = _.find(
      this.state.otherStudents,
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
    const maped = _.map(arr, (student) => (
      <ListItem
        student={student}
        onDelete={() => {
          this.HandleDeleteFromList(student.id, list);
        }}
      />
    ));
    if (arr.length < 3) {
      maped.push(
        <AddItem
          otherStudents={this.state.otherStudents}
          onSave={(toAdd) => {
            this.HandleAddToList(toAdd, "likes");
          }}
        />
      );
    }

    return maped;
  };

  render() {
    if (this.state.student.id === -1) {
      return null;
    }
    return (
      <div className={Style_MainGrid.AppMainAreaOut}>
        <NameItem
          student={this.state.student}
          onChangeName={(newName) => this.HandleChangeName(newName)}
        />
        <br />
        likes:
        {this.ShowList("likes")}
        <br />
        dislikes:
        {this.ShowList("dislike")}
        <br />
        <button className={labelStyles.SaveButton} onClick={this.HandleSave}>
          <span className={labelStyles.Text}>save</span>
        </button>
        <button
          className={labelStyles.CancelButton}
          onClick={this.props.cancel}
        >
          <span className={labelStyles.Text}>cancel</span>
        </button>
      </div>
    );
  }
}

export default StudentEdit;
