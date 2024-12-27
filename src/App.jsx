import React from "react";
import RandColor from "./components/ColorWrapper";
import { NavLink, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";

function App() {
  const mode = useSelector((state) => state.mode);
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: mode == "light" ? "white" : "black",
        }}
        className="min-h-screen"
      >
        <Routes>
          <Route path="/color" element={<RandColor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
