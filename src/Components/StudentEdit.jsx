import React, { Component } from "react";
import buttonStyles from "../cssFiles/simpleButtons.module.css";

class StudentEdit extends Component {
  state = {
    student: { id: 0, name: "temp", likes: [], dislike: [] },

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
    const student = this.students.find(
      ({ id }) => id == this.props.match.params.id
    );
    this.setState({ student });
  }

  HundleDone = () => {
    let student = this.state.student;
    student.name = this.nameInput.current.value;
    this.setState({ student: student, nameEdit: false });
  };

  HandleDelete = (id, list) => {
    const student = this.state.student;
    const index = list.indexOf(id);
    if (index > -1) {
      list.splice(index, 1);
    }
    this.setState({ student: student });
  };

  HandleSave = (id, list) => {
    let student = this.state.student;
    list.push(id);
    this.setState({ student: student });
  };

  ShowList = (list) => {
    return list.map((id2) => (
      <li key={`${id2}`}>
        <span>
          {this.students.find(({ id }) => id == id2).name}
          <button
            className={buttonStyles.deleteButton}
            onClick={(e) => this.HandleDelete(id2, list)}
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
            ></input>
            <button
              className={buttonStyles.saveButton}
              onClick={this.HundleDone}
            ></button>
          </span>
        ) : (
          <span>
            {this.state.student.name}
            <button
              className={buttonStyles.editButton}
              onClick={(e) => {
                this.setState({ nameEdit: true });
              }}
            ></button>
          </span>
        )}
        <br />
        likes:
        <ul>
          {this.ShowList(this.state.student.likes)}

          {this.state.student.likes.length < 3 && !this.state.likeAdd ? (
            <li key="addButton">
              <button
                className={buttonStyles.addButton}
                onClick={(e) => {
                  this.setState({ likeAdd: true });
                }}
              ></button>
            </li>
          ) : this.state.likeAdd ? (
            <li key="new">
              <span>
                <select ref={this.likeAdd}>
                  {this.students.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button
                  className={buttonStyles.saveButton}
                  onClick={(e) => {
                    this.HandleSave(
                      this.likeAdd.current.value,
                      this.state.student.likes
                    );
                    this.setState({ likeAdd: false });
                  }}
                ></button>
              </span>
            </li>
          ) : null}
        </ul>
        <br />
        dislikes:
        <ul>
          {this.ShowList(this.state.student.dislike)}

          {this.state.student.dislike.length < 3 && !this.state.dislikeAdd ? (
            <li key="addButton">
              <button
                className={buttonStyles.addButton}
                onClick={(e) => {
                  this.setState({ dislikeAdd: true });
                }}
              ></button>
            </li>
          ) : this.state.dislikeAdd ? (
            <li key="new">
              <span>
                <select ref={this.dislikeAdd}>
                  {this.students.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button
                  className={buttonStyles.saveButton}
                  onClick={(e) => {
                    this.HandleSave(
                      this.dislikeAdd.current.value,
                      this.state.student.dislike
                    );
                    this.setState({ dislikeAdd: false });
                  }}
                ></button>
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }

  students = [
    { id: 23, name: "amit", likes: [98, 99], dislike: [11] },
    { id: 11, name: "gal" },
    { id: 98, name: "hagit" },
    { id: 99, name: "eli" },
    { id: 1, name: "alpha" },
    { id: 2, name: "bravo" },
    { id: 3, name: "chralie" },
    { id: 4, name: "delta" },
    { id: 5, name: "echo" },
    { id: 6, name: "fox" },
    { id: 26, name: "zulu" },
    { id: 25, name: "yankee" },
    { id: 24, name: "xray" },
    { id: 27, name: "whiskey" },
    { id: 28, name: "victor" },
  ];
}

export default StudentEdit;
