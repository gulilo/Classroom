import AppColors from "../cssFiles/Colors.module.css";
import style from "../cssFiles/TopMenuBar.module.css";

import { BrowserRouter as Router,NavLink } from "react-router-dom";
import Greeting from "./Greeting";

import React from 'react'

export default function TopMenuBar() {
    return (
        <Router>
          <div className={style.TopMenuBar}>
            <div className={style.ClassMenuItems}>
        <NavLink to="/classroom" className={style.MenuItem}>
          <span className={style.TextField}>כיתות</span>
        </NavLink>
        <NavLink to="/classroom/new" className={style.MenuItem}>
        <span className={style.TextField}>כיתה חדשה</span>
        </NavLink>
        <NavLink to="/options" className={style.MenuItem}>
        <span className={style.TextField}>אפשרויות</span>
        </NavLink>
            </div>
        <br />
        <div className={style.Greeting}>
        <Greeting name="Degenerat" />
        </div>
        </div>
      </Router>
    )
}
