import classNames from "classnames";
import { BsCalendar } from "react-icons/bs";
import ProjectDescription from "../ProjectDescription";
import SlidingPanel from "../SlidingPanel";

const description = {
  newSkills: ["Tailwind"],
  upgradedSkills: ["React", "MongoDB", "Node/Express"],
  title: "BlockByBlock",
  Icon: <BsCalendar className="ml-1 inline" />,
  intro:
    "This is a minimal full-stack application that allows users to track their daily habits. Users can mark calendars for a block of 30 days for each habit, and track their progress over time.",
};

const BlockByBlock = ({ className }) => {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel
        projectImage="https://res.cloudinary.com/skyimages/image/upload/v1675088582/Portfolio/block_by_block_iw2xfh.png"
        hiddenContent={<ProjectDescription {...description} />}
      />
    </div>
  );
};

export default BlockByBlock;
