import React from "react";
import { Routes, Route } from "react-router-dom";
import Chats from "./Chats";
import Home from "./Home";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chats" element={<Chats />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
