import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from "./Pages/Auth/Register";

import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
