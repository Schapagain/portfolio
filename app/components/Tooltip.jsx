import classNames from "classnames";
import React, { useState } from "react";

export default function Tooltip({ text, location = "left", children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const borderColors = {
    right: "transparent black transparent transparent",
    bottom: "transparent transparent black transparent",
    left: "transparent transparent transparent black",
    top: "black transparent transparent transparent",
  };

  const locationArrowClasses = classNames("w-0 h-0 absolute z-50", {
    "top-0 -left-7": location === "right",
    "-top-7 right-0": location === "bottom",
    "top-2 -right-7": location === "left",
    "top-11 left-3": location === "top",
  });

  const locationClasses = classNames(
    "z-30 min-h-14 bg-black text-white cursor-default p-2 text-sm rounded-md w-36 absolute animate-fade-in transform",
    {
      "-top-2 left-full translate-x-2": location === "right",
      "top-full right-0 translate-y-1/2": location === "bottom",
      "-top-2 right-full -translate-x-2": location === "left",
      "bottom-full -left-2 -translate-y-1/2": location === "top",
    }
  );

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative inline"
    >
      {children}
      {showTooltip && (
        <div aria-hidden={true} className={locationClasses}>
          <div className="relative">
            <span>{text}</span>
            <span
              style={{
                borderStyle: "solid",
                borderWidth: "0.75rem",
                borderColor: borderColors[location],
              }}
              className={locationArrowClasses}
            />
          </div>
        </div>
      )}
    </div>
  );
}
