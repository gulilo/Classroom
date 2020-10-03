import React, { useContext, useRef } from "react";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";
import { MockedContext } from "../MockedContext";

export default function Login({ onLogin }) {
  const api = useContext(MockedContext);

  const nameInput = useRef(null);
  const passwordInput = useRef(null);
  return (
    <div className={Style_MainGrid.AppMainAreaOut}>
      <input type="text" ref={nameInput} />
      <input type="password" ref={passwordInput} />
      <button
        onClick={() => {
          onLogin(
            api.users.login(
              nameInput.current.value,
              passwordInput.current.value
            )
          );
        }}
      >
        login
      </button>
    </div>
  );
}
