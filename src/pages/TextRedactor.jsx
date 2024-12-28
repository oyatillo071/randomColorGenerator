import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeChange } from "../../store/ModeSlice";
import { update } from "../../store/textStyleSlice";
import { inputColor } from "../../store/randomValueSlice";
import { Toaster, toast } from "sonner";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { textStyleVlaues } from "../constants/constants";

function TextRedactor() {
  const color = useSelector((state) => state.randomValue.value);
  const dispatch = useDispatch();
  const { family, size, style, weight } = useSelector((state) => state.text);
  const mode = useSelector((state) => state.mode);

  const [inputTextValue, setInputTextValue] = useState("");

  function handleCopy() {
    navigator.clipboard
      .writeText(inputTextValue)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy: ", err);
      });
  }

  return (
    <div className="flex flex-col items-center justify-around">
      <Toaster richColors position="top-right" expand={false} />

      <div className="flex items-center w-full justify-around">
        <div>
          <label htmlFor="font-family">Font family</label>
          <select
            id="font-family"
            className="bg-white rounded-md p-2  border-2 border-black flex text- items-center gap-4 justify-around"
            onChange={({ target: { value } }) => {
              dispatch(update({ type: "family", value }));
            }}
          >
            {textStyleVlaues.fontFamily.map((value, index) => {
              return (
                <option
                  key={index}
                  className=" hover:underline cursor-pointer underline-offset-4 font-serif text-xl"
                  value={value.value}
                >
                  {value.font}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center flex-col  gap-3">
          <label htmlFor="text-size">Text size</label>
          <input
            type="range"
            value={size}
            id="text-size"
            min={1}
            max={100}
            onChange={({ target: { value } }) => {
              value += "px";
              dispatch(update({ type: "size", value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="text-style">Text Style</label>
          <select
            id="text-style"
            onChange={({ target: { value } }) => {
              // console.log(value);

              dispatch(update({ type: "style", value }));
            }}
            className="bg-white rounded-md p-2  border-2 border-black flex items-center gap-4 justify-around"
          >
            {textStyleVlaues.fontStyle.map((value, index) => {
              return (
                <option
                  key={index}
                  className=" hover:underline cursor-pointer underline-offset-4 font-serif text-xl"
                  value={value.value}
                >
                  {value.style}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="font-weight">Font weight</label>
          <input
            type="range"
            name=""
            id="font-weight"
            value={weight / 100}
            min={1}
            max={9}
            onChange={({ target: { value } }) => {
              dispatch(update({ type: "weight", value: +value * 100 }));
            }}
          />
        </div>
        <div>
          <h3>Color</h3>
          <div
            className={`w-8 h-8 relative rounded-full justify-center flex flex-col text-white overflow-hidden border-2 border-${
              mode == "light" ? "white" : "black"
            }`}
            style={{
              backgroundColor: color,
            }}
          >
            <label
              htmlFor="colorInput"
              className="w-full h-full absolute rounded-full top-0 left-0 cursor-pointer"
            ></label>
            <input
              id="colorInput"
              type="color"
              value={color}
              onChange={(e) => {
                dispatch(inputColor(e.target.value));
              }}
              className={`w-full h-full hidden border-none outline-none `}
            />
          </div>{" "}
        </div>
      </div>
      <form
        className="w-full p-5 relative"
        onSubmit={(event) => {
          event.preventDefault();
          handleCopy();
        }}
      >
        <textarea
          className="border w-full min-h-screen resize-none rounded-md p-2"
          value={inputTextValue}
          onChange={(e) => {
            setInputTextValue(e.target.value);
          }}
          style={{
            fontSize: size,
            fontFamily: family,
            fontWeight: weight,
            fontStyle: style,
            color: color,
          }}
          id="text-area"
        ></textarea>
        <button
          className={`flex items-center gap-2 bg-white absolute top-10 right-10 p-4 rounded-md text-xl ${
            mode === "light" ? "border-2" : "border-none"
          }`}
        >
          <div className="relative group">
            <ClipboardCopyIcon className="w-5 h-5" />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-black text-white px-2 py-1 rounded">
              Copy
            </span>
          </div>
        </button>
      </form>
    </div>
  );
}

export default TextRedactor;
