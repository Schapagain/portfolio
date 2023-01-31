import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import classNames from "classnames";
import { useSpring, animated, config } from "react-spring";

function ProjectImage({ url }) {
  return url ? (
    <img
      className="block w-full h-auto"
      src={url}
      alt={`project website screenshot`}
    />
  ) : (
    <div className="w-full h-full bg-blue-200 flex flex-col justify-center items-center bg-[#BCB8B7] text-calypso font-bold text-xl">
      <p className="text-7xl">404</p>
      <p>Project Preview Not Available</p>
    </div>
  );
}

export default function SlidingPanel({ hiddenContent, projectImage }) {
  const [panelVisible, setPanelVisible] = useState(false);

  const mainContentProps = useSpring({
    to: {
      opacity: 1,
      left: panelVisible ? "-30%" : "0%",
    },
    from: {
      opacity: 0,
      left: panelVisible ? "0%" : "-30%",
    },
    config: config.slow,
  });

  const hiddenContentProps = useSpring({
    to: {
      opacity: 1,
      right: panelVisible ? "-40%" : "-5%",
    },
    from: {
      opacity: 0,
      right: panelVisible ? "-5%" : "-40%",
    },
  });

  const websiteClass = classNames(
    "flex-col flex lg:justify-end z-10 lg:absolute w-full lg:max-w-lg h-1/2 lg:pb-0 lg:h-full -left-0 top-0",
    {}
  );
  const descriptionClass = classNames(
    "flex text-sm lg:text-md lg:text-lg h-1/2 lg:h-full mt-2 lg:mt-0 right-0 lg:absolute w-full lg:w-2/3"
  );

  return (
    <div className="relative z-10 flex flex-col lg:flex-row h-full justify-center px-5 sm:px-20 lg:px-0 my-5 items-center w-full m-auto">
      <animated.div style={mainContentProps} className={websiteClass}>
        <div className="flex h-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl overflow-hidden">
          <ProjectImage url={projectImage} />
        </div>
        <div
          onClick={() => setPanelVisible(!panelVisible)}
          style={{ backgroundColor: "#8f8e8b" }}
          className={`absolute right-0 flex hidden 
                lg:flex
                my-auto h-full cursor-pointer`}
        >
          <FiMoreVertical className="my-auto" />
        </div>
      </animated.div>
      <animated.div style={hiddenContentProps} className={descriptionClass}>
        {hiddenContent}
      </animated.div>
    </div>
  );
}
