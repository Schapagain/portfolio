import classNames from "classnames";
import { BsCalendar } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { SiTailwindcss } from "react-icons/si";
import { DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import Landing from "./BlockByBlock/Landing";
import SlidingPanel from "./SlidingPanel";

const Description = () => {
  const iconClass = "mr-2 inline";
  return (
    <div className="m-0.5 bg-calypso text-white text-sm p-3 w-full rounded-r-xl flex flex-col justify-center">
      <p className="mb-3">
        <a
          href="https://github.com/Schapagain/habit-tracker"
          target="_blank"
          rel="noreferrer"
        >
          Block By Block
        </a>{" "}
        <BsCalendar className="ml-1 inline" />
      </p>
      <p className="mb-3">
        This is a minimal full-stack application that allows users to track
        their daily habits. Users can mark calendars for a block of 30 days for
        each habit, and track their progress over time.
      </p>
      <p>
        <GiCheckMark className={iconClass} />
        Work on multiple habits at a time <br />
        <GiCheckMark className={iconClass} />
        Get statistics and insights on past works on each habit
        <br />
        <GiCheckMark className={iconClass} />
        Add notes and daily reflections
        <br />
      </p>
      <p className="mt-3">
        Technologies used:
        <br />
        <DiReact className={iconClass} />
        React
        <br />
        <SiTailwindcss className={iconClass} />
        Tailwind
        <br />
        <DiNodejsSmall className={iconClass} />
        Node/Express
        <br />
        <DiMongodb className={iconClass} />
        MongoDB
      </p>
    </div>
  );
};

const WebSite = () => {
  return <Landing />;
};

const BlockByBlock = ({ className, Ref, scrollUp, scrollDown }) => {
  const mainClass = classNames(className);
  const buttonClass = "animate-bounce text-5xl hover:text-white mt-5";
  return (
    <div ref={Ref} className={mainClass}>
      {scrollUp && (
        <div className="flex md:mt-10 transform rotate-180 relative font-thin justify-center invisible md:visible">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollUp();
            }}
            className={buttonClass}
            href="/#"
          >
            V
          </a>
        </div>
      )}
      <SlidingPanel mainContent={<WebSite />} hiddenContent={<Description />} />
      {scrollDown && (
        <div className="flex mb-10 relative font-thin justify-center invisible md:visible">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollDown();
            }}
            className={buttonClass}
            href="/#"
          >
            V
          </a>
        </div>
      )}
    </div>
  );
};

export default BlockByBlock;
