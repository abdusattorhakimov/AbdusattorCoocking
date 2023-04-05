import React from "react";
import createContext from "../hooks/createContext";
import { WiMoonAltFirstQuarter } from "react-icons/all";
const colors = ["#576cbc", "#245953", "#413543"];
function ColorList() {
  const { mode, changeColor, changeMode } = createContext();
  const HandilMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };
  return (
    <div className="max-w-screen-lg mx-auto px-6 mb-8 flex items-center justify-between">
      <div className="text-4xl cursor-pointer dark:text-white">
        <WiMoonAltFirstQuarter onClick={HandilMode} />
      </div>
      <div className="flex gap-2">
        {colors.map((newColor) => {
          return (
            <span
              onClick={() => {
                changeColor(newColor);
              }}
              key={newColor}
              className="inline-block cursor-pointer"
              style={{
                width: "33px",
                height: "33px",
                background: newColor,
                borderRadius: "100%",
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorList;
