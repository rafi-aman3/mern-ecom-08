import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h1>THIS IS NAVABR</h1>
      <Outlet/>
      <h1>THIS IS FOOOTER</h1>
    </div>
  );
};

export default MainLayout;
