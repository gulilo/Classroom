import React from "react";
import { useSelector } from "react-redux";
import Style_MainGrid from "../cssFiles/MainGridLayout.module.css";

function Home() {
  const user = useSelector((state) => state.user);
  return <div className={Style_MainGrid.AppMainAreaOut}>Home</div>;
}

export default Home;
