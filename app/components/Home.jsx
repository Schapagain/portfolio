import Underline from "./Underline";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center text-white w-screen text-md">
      <div className="flex flex-col items-center mb-4">
        <p className="text-5xl mb-2">Hi there. I am Sandesh.</p>
        <Underline className="max-w-underline-max-width" />
        <p className="text-2xl mt-3">I love building stuff on the web.</p>
      </div>
    </main>
  );
}
