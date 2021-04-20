import classNames from "classnames";
import { BsCalendar } from "react-icons/bs";
import Landing from "./BlockByBlock/Landing";
import SlidingPanel from "./SlidingPanel";
import ProjectDescription from "./ProjectDescription";

const description = {
  newSkills: ["Tailwind"],
  upgradedSkills: ["React", "MongoDB", "Node/Express"],
  title: "BlockByBlock",
  Icon: <BsCalendar className="ml-1 inline" />,
  intro:
    "This is a minimal full-stack application that allows users to track their daily habits. Users can mark calendars for a block of 30 days for each habit, and track their progress over time.",
};

const WebSite = () => {
  return <Landing />;
};

const BlockByBlock = ({ className }) => {
  const mainClass = classNames(className);
  return (
    <div className={mainClass}>
      <SlidingPanel
        mainContent={<WebSite />}
        hiddenContent={<ProjectDescription {...description} />}
      />
    </div>
  );
};

export default BlockByBlock;
