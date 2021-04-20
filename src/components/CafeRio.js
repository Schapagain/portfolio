import classNames from "classnames";
import { SiCoffeescript } from "react-icons/si";
import SlidingPanel from "./SlidingPanel";
import Landing from "./CafeRio/Landing";
import ProjectDescription from "./ProjectDescription";

const description = {
  newSkills: ["Figma"],
  upgradedSkills: ["React/Redux", "Node/Express", "JWTs", "MongoDB"],
  title: "Cafe Rio",
  Icon: <SiCoffeescript className="ml-1 inline" />,
  intro:
    "This is a web application we built for an online hackathon. The idea was to help employees order food from their office cafeteria.",
};

const Website = () => {
  return <Landing />;
};

const CafeRio = ({ className }) => {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel
        mainContent={<Website />}
        hiddenContent={<ProjectDescription {...description} />}
      />
    </div>
  );
};

export default CafeRio;
