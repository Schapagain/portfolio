import React from "react";
import Navigation from "~/components/Navigation";
import Home from "../components/Home";

export default function Index() {
  return (
    <div className="flex w-full min-h-screen flex-col justify-center items-center">
      <Home />
      <Navigation />
    </div>
  );
}
