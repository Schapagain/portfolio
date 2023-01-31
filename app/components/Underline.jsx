import React, { HTMLAttributes } from "react";

export default function Underline({ className, ...props }) {
  const allClasses = "h-0.5 w-3/5 bg-white  block mb-2 " + (className || "");
  return <span aria-hidden="true" className={allClasses} {...props}></span>;
}
