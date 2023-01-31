import React from "react";

export default function Line({ className, bg = "turq" }) {
  return (
    <span
      aria-hidden={true}
      className={`${className || ""} h-0.5 w-3/5 bg-${bg} block mb-2`}
    />
  );
}
