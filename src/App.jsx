import React from "react";
import RandColor from "./pages/ColorWrapper";
import { NavLink, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import TextRedactor from "./pages/TextRedactor";
import UserForm from "./pages/userForm";

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
          <Route path="/" element={<RandColor />} />
          <Route path="/color" element={<RandColor />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/textRedactor" element={<TextRedactor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
