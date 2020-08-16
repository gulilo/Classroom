import React, { Component } from "react";

class StudentComponent extends Component {
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

  HandleEdit = () => {
    this.setState({ nameEdit: true });
  };

  HundleDone = () => {
    let student = this.state.student;
    student.name = this.nameInput.current.value;
    this.setState({ student: student, nameEdit: false });
  };

  HandleDeleteLike = (id, e) => {
    const student = this.state.student;
    const index = student.likes.indexOf(id);
    if (index > -1) {
      student.likes.splice(index, 1);
    }
    this.setState({ student: student });
  };

  HandleLikeAdd = () => {
    this.setState({ likeAdd: true });
  };

  HandleLikeSave = () => {
    let student = this.state.student;
    student.likes.push(this.likeAdd.current.value);
    this.setState({ student: student, likeAdd: false });
  };

  HandleDislikeAdd = () => {
    this.setState({ dislikeAdd: true });
  };

  HandleDislikeSave = () => {
    let student = this.state.student;
    student.dislike.push(this.dislikeAdd.current.value);
    this.setState({ student: student, dislikeAdd: false });
  };

  HandleDeleteDislike = (id, e) => {
    const student = this.state.student;
    const index = student.dislike.indexOf(id);
    if (index > -1) {
      student.dislike.splice(index, 1);
    }
    this.setState({ student: student });
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
            <button onClick={this.HundleDone}>done</button>
          </span>
        ) : (
          <span>
            {this.state.student.name}
            <button onClick={this.HandleEdit}>edit</button>
          </span>
        )}
        <br />
        likes:
        <ul>
          {this.state.student.likes.map((id2) => (
            <li key={`${id2}`}>
              <span>
                {this.students.find(({ id }) => id == id2).name}
                <button onClick={(e) => this.HandleDeleteLike(id2, e)}>
                  delete
                </button>
              </span>
            </li>
          ))}

          {this.state.student.likes.length < 3 && !this.state.likeAdd ? (
            <li key="addButton">
              <button onClick={this.HandleLikeAdd}>add</button>
            </li>
          ) : this.state.likeAdd ? (
            <li key="new">
              <span>
                <select ref={this.likeAdd}>
                  {this.students.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button onClick={this.HandleLikeSave}>save</button>
              </span>
            </li>
          ) : null}
        </ul>
        <br />
        dislikes:
        <ul>
          {this.state.student.dislike.map((id2) => (
            <li key={`${id2}`}>
              {this.students.find(({ id }) => id == id2).name}
              <button onClick={(e) => this.HandleDeleteDislike(id2, e)}>
                delete
              </button>
            </li>
          ))}
          {this.state.student.dislike.length < 3 && !this.state.dislikeAdd ? (
            <li key="addButton">
              <button onClick={this.HandleDislikeAdd}>add</button>
            </li>
          ) : this.state.dislikeAdd ? (
            <li key="new">
              <span>
                <select ref={this.dislikeAdd}>
                  {this.students.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </select>
                <button onClick={this.HandleDislikeSave}>save</button>
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

export default StudentComponent;
