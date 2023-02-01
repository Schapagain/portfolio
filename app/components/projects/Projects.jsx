import React from "react";
import classNames from "classnames";
import CafeRio from "./CafeRio";
import BlockByBlock from "./BlockByBlock";
import WeekendIdeas from "./WeekendIdeas";
import Carousel from "../Carousel";
import VirtualGalapagos from "./VirtualGalapagos";

export default function Projects() {
  const projectsClass = classNames(
    "w-full h-full flex flex-col justify-between"
  );
  return (
    <div className="w-full md:w-5/6 lg:w-full px-8 sm:px-24 lg:px-0 h-screen lg:h-96">
      <Carousel
        className="h-2/3 lg:h-full hidden lg:flex"
        items={[
          <CafeRio className={projectsClass} />,
          <VirtualGalapagos className={projectsClass} />,
          <BlockByBlock className={projectsClass} />,
          <WeekendIdeas className={projectsClass} />,
        ]}
      />
      <div className="flex flex-col lg:hidden">
        <CafeRio className={projectsClass} />
        <VirtualGalapagos className={projectsClass} />
        <BlockByBlock className={projectsClass} />
        <WeekendIdeas className={projectsClass} />
      </div>
    </div>
  );
}
