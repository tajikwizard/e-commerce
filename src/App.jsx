import { useState } from "react";
import Header from "./components/Header/Header";
import "./index.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
