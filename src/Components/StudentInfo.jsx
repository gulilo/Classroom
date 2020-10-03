import React from "react";
import { Link } from "react-router-dom";

import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import _ from "lodash";

export default function StudentInfo({ student }) {
  return (
    <div className={Style_MainGrid.AppMainAreaOut}>
      <span>name: {student.name}</span>
      <br />
      <span>sex: {student.sex ? student.sex : "unknown"}</span>
      <br />
      <span>
        classes:
        {_.map(student.classes, (bla) => (
          <Link key={bla.id} to={`/classroom/${bla.id}`}>
            {bla.name + " "}
          </Link>
        ))}
      </span>
    </div>
  );
}
