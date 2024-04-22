import Header from "./components/Header/Header";
import { useState } from "react";
import "./index.css";
import { Outlet, createSearchParams, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const onSearch = (searchTerm) => {
    navigate(`/?${createSearchParams({ q: searchTerm })}`);
  };

  return (
    <>
      <Header onSearch={onSearch} />
      <Outlet />
    </>
  );
}

export default App;
