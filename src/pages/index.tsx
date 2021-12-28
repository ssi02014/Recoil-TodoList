import React from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import Home from "./Home";

const Router = () => {
  const routerList: RouteProps[] = [
    {
      path: "/",
      element: <Home />,
    },
  ];
  return (
    <Routes>
      {routerList.map((router, idx) => (
        <Route {...router} key={idx} />
      ))}
    </Routes>
  );
};

export default Router;
