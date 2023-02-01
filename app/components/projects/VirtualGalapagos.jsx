import classNames from "classnames";
import { TbBulb } from "react-icons/tb";
import SlidingPanel from "../SlidingPanel";
import ProjectDescription from "../ProjectDescription";

const description = {
  upgradedSkills: ["Figma", "React", "Nodejs", "Github Actions"],
  title: "Virtual Galapagos",
  Icon: <TbBulb className="ml-1 inline" />,
  intro:
    "An interactive digital learningn module devloped by Colgate University faculty and students. The primary goal of this project is to teach chiildren science in an innovate way.",
  link: "https://colgate-virtual-galapagos.netlify.app/",
  githubLink: "https://github.com/Schapagain/ColgateVirtualGalapagos",
};

const VirtualGalapagos = ({ className }) => {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel
        projectImage="https://res.cloudinary.com/skyimages/image/upload/v1675206658/Portfolio/virtual_galapagos_sq8iid.png"
        hiddenContent={<ProjectDescription {...description} />}
      />
    </div>
  );
};

export default VirtualGalapagos;
