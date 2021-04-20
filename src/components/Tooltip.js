import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="w-full h-full relative inline"
    >
      {children}
      {showTooltip && (
        <div
          aria-hidden={true}
          className="z-30 bg-black text-gray-300 cursor-default p-2 text-xs rounded-md w-32 absolute top-0 left-full left-0 animate-fade-in"
        >
          <div className="relative">
            <span>{text}</span>
            <span
              style={{
                borderStyle: "solid",
                borderWidth: "0.75rem",
                borderColor: "transparent black transparent transparent",
              }}
              className="w-0 h-0 absolute z-50 top-0 -left-7"
            />
          </div>
        </div>
      )}
    </div>
  );
}
