import React from "react";
import classNames from "classnames";

const AppNavbar = ({ className }) => {
  const mainClass = classNames(className, " p-10 text-white bg-calypso");

  return (
    <header className={mainClass}>
      <h1 className="text-4xl"> Sandesh Chapagain </h1>
    </header>
  );
};

export default AppNavbar;
