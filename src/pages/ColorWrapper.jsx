import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  generateRandomGradient,
  generateRandomValue,
  inputColor,
} from "../../store/randomValueSlice";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { Toaster, toast } from "sonner";

const RandomColorBox = () => {
  const color = useSelector((state) => state.randomValue.value);
  const dispatch = useDispatch();

  function handleCopy() {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy: ", err);
      });
  }

  const mode = useSelector((state) => state.mode);

  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "white" : "black",
      }}
      className="flex justify-center items-center p-5 "
    >
      <div className="flex items-center gap-5 flex-col">
        <div
          className={`w-full h-52 relative rounded-md justify-center flex flex-col text-white overflow-hidden border-2 border-${
            mode == "light" ? "white" : "black"
          }`}
          style={{
            background: color,
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
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 bg-white p-4 text-wrap rounded-md text-xl ${
              mode === "light" ? "border-2" : "border-none"
            }`}
          >
            {color}
            <div className="relative group">
              <ClipboardCopyIcon className="w-5 h-5" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-black text-white px-2 py-1 rounded">
                Copy
              </span>
            </div>
          </button>
          <button
            onClick={() => dispatch(generateRandomValue())}
            className={`btn p-3 text-xl select-none rounded-md ${
              mode == "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Generate Random Color
          </button>
          <button
            onClick={() => dispatch(generateRandomGradient())}
            className={`btn p-3 text-xl select-none rounded-md ${
              mode == "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Generate Random Gradient
          </button>
        </div>
      </div>
      <Toaster richColors position="top-right" expand={false} />
    </div>
  );
};

export default RandomColorBox;
