import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Home from "../Components/Home";
import Login from "../Components/Login";
import { useAppDispatch } from "../redux/store";
import { setUser } from "../redux/UserSlice";

export default function LoginRoute() {
  const dispatch = useAppDispatch();
  const user = useSelector((state) => state.user);

  const [logedin, setlogedin] = useState(false);

  function onLogin(user) {
    dispatch(setUser(user));
    setlogedin(true);
  }

  if (logedin) {
    return <Home user={user} />;
  }

  return <Login onLogin={onLogin} />;
}
