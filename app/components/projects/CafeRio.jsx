import classNames from "classnames";
import { SiCoffeescript } from "react-icons/si";
import SlidingPanel from "../SlidingPanel";
import ProjectDescription from "../ProjectDescription";

const description = {
  newSkills: ["Figma"],
  upgradedSkills: ["React/Redux", "Node/Express", "JWTs", "MongoDB"],
  title: "Cafe Rio",
  Icon: <SiCoffeescript className="ml-1 inline" />,
  intro:
    "This is a web application we built for an online hackathon. The idea was to help employees order food from their office cafeteria.",
  link: "https://cafe-rio.netlify.app/",
  githubLink: "https://github.com/Schapagain/cafe-rio",
};

const CafeRio = ({ className }) => {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel
        projectImage="https://res.cloudinary.com/skyimages/image/upload/v1675088582/Portfolio/cafe_rio_fgmj8e.png"
        hiddenContent={<ProjectDescription {...description} />}
      />
    </div>
  );
};

export default CafeRio;
