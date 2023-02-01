import classNames from "classnames";
import { TbBulb } from "react-icons/tb";
import SlidingPanel from "../SlidingPanel";
import ProjectDescription from "../ProjectDescription";

const description = {
  newSkills: ["Design"],
  upgradedSkills: ["React", "Integration"],
  title: "Weekend Ideas",
  Icon: <TbBulb className="ml-1 inline" />,
  intro: "A very simple implementation for Bored API",
  link: "https://weekend-ideas.netlify.app/#",
  githubLink: "https://github.com/Schapagain/weekend-ideas",
};

const WeekendIdeas = ({ className }) => {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel hiddenContent={<ProjectDescription {...description} />} />
    </div>
  );
};

export default WeekendIdeas;
