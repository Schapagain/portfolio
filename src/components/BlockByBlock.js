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

const BlockByBlock = ({ className }) => {
  const mainClass = classNames(className);
  return (
    <div className={mainClass}>
      <SlidingPanel mainContent={<WebSite />} hiddenContent={<Description />} />
    </div>
  );
};

export default BlockByBlock;
