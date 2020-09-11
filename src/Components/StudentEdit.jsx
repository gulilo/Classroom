import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";

import buttonStyles from "../cssFiles/simpleButtons.module.css";
import labelStyles from "../cssFiles/StudentEdit.module.css";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

function NameItem(props) {
  const [edit, setEdit] = useState(false);
  const nameInput = useRef(null);

  if (!edit) {
    return (
      <span className={labelStyles.StudentNameBracket}>
        <h4
          className={labelStyles.NameLabel}
          onClick={() => {
            setEdit(true);
          }}
        >
          {props.student.name}
        </h4>
      </span>
    );
  } else {
    return (
      <span className={labelStyles.StudentNameBracket}>
        <input
          autoFocus
          className={labelStyles.NameLabel}
          type="Text"
          ref={nameInput}
          defaultValue={props.student.name}
          onBlur={() => {
            props.onChangeName(nameInput.current.value);
            setEdit(false);
          }}
        />
      </span>
    );
  }
}

function ListItem(props) {
  if (!props.student) {
    return null;
  }
  return (
    <span className={labelStyles.StudentNameBracket}>
      {props.student.name}
      <button
        className={labelStyles.DeleteButton}
        onClick={(e) => props.onDelete()}
      ></button>
    </span>
  );
}

function AddItem(props) {
  const [add, setAdd] = useState(false);
  const selector = useRef(null);

  if (!add) {
    return (
      <button
        className={buttonStyles.addButton}
        onClick={(e) => {
          setAdd(true);
        }}
      />
    );
  } else {
    return (
      <span className={labelStyles.StudentNameBracket}>
        <select
          className={labelStyles.StudentPicker}
          ref={selector}
          onChange={() => {
            props.onSave(selector.current.value);
            setAdd(false);
          }}
        >
          <option value={-1}>pick</option>
          {props.otherStudents.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </span>
    );
  }
}

function StudentEdit(props) {
  const [student, setStudent] = useState({
    id: -1,
    name: "",
    likes: [],
    dislike: [],
  });

  useEffect(() => {
    setStudent(props.student);
  }, [props.student]);

  const HandleChangeName = (newName) => {
    setStudent({ ...student, name: newName });
  };

  const HandleDeleteFromList = (toDelete, list) => {
    let arr;
    if (list === "likes") {
      arr = student.likes;
      _.remove(arr, { id: toDelete });
    } else {
      arr = student.dislike;
      _.remove(arr, { id: toDelete });
    }
    setStudent({ ...student, arr });
  };

  const HandleAddToList = (studentId, list) => {
    const toadd = _.find(
      props.otherStudents,
      ({ id }) => id === parseInt(studentId, 10)
    );
    let arr;
    if (list === "likes") {
      arr = student.likes;
      arr.push(toadd);
    } else {
      arr = student.dislike;
      arr.push(toadd);
    }

    setStudent({ ...student, arr });
  };

  const HandleSave = () => {
    props.saveStudent();
  };

  const ShowList = (list) => {
    var arr;
    if (list === "likes") {
      arr = student.likes;
    } else {
      arr = student.dislike;
    }
    const maped = _.map(arr, (student) => (
      <ListItem
        key={student.id}
        student={student}
        onDelete={() => {
          HandleDeleteFromList(student.id, list);
        }}
      />
    ));
    if (arr.length < 3) {
      maped.push(
        <AddItem
          key={"add"}
          otherStudents={props.otherStudents}
          onSave={(toAdd) => {
            HandleAddToList(toAdd, list === "likes" ? "likes" : "dislike");
          }}
        />
      );
    }

    return maped;
  };

  if (student.id === -1) {
    return null;
  }
  return (
    <div className={Style_MainGrid.AppMainAreaOut}>
      <NameItem
        student={student}
        onChangeName={(newName) => HandleChangeName(newName)}
      />
      <br />
      likes:
      {ShowList("likes")}
      <br />
      dislikes:
      {ShowList("dislike")}
      <br />
      <button className={labelStyles.SaveButton} onClick={HandleSave}>
        <span className={labelStyles.Text}>save</span>
      </button>
      <button className={labelStyles.CancelButton} onClick={props.cancel}>
        <span className={labelStyles.Text}>cancel</span>
      </button>
    </div>
  );
}

export default StudentEdit;
