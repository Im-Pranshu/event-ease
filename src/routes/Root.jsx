import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/Root.css";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="mainOutlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
