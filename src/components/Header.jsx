import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeChange } from "../../store/ModeSlice";
import { NavLink } from "react-router-dom";

function Header() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  function handleMode() {
    dispatch(modeChange());
  }

  return (
    <header
      className={`flex items-center border-b-2 border-x-none border-t-0 border-${
        mode == "light" ? "black" : "black"
      } justify-around px-10 py-2`}
      style={{
        backgroundColor: mode == "light" ? "white" : "black",
      }}
    >
      <NavLink
        to="/color"
        style={{
          color: mode == "light" ? "black" : "white",
        }}
        className=" hover:underline underline-offset-8"
      >
        Random Color
      </NavLink>
      <button onClick={handleMode} className="p-2">
        {mode === "light" ? (
          <MoonIcon className="w-10 h-8" />
        ) : (
          <SunIcon className="w-10 h-8 text-white" />
        )}
      </button>
    </header>
  );
}

export default Header;
