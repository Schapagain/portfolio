import React from "react";
import Navigation from "~/components/Navigation";
import Projects from "~/components/projects/Projects";

export default function Index() {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <h1 className="text-center text-2xl 2xl:text-title mb-10 mt-24 lg:mt-0">
        What do I do on a lazy weekend?
      </h1>
      <Projects />
      <Navigation type="fixed" tooltip="bottom" />
    </div>
  );
}
