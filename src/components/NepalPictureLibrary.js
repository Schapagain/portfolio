import classNames from "classnames";
import { FaCameraRetro } from "react-icons/fa";
import SlidingPanel from "./SlidingPanel";
import Landing from "./NepalPictureLibrary/Landing";
import ProjectDescription from "./ProjectDescription";

const description = {
  newSkills: ["Webpack", "Docker", "AWS"],
  upgradedSkills: ["React", "Tailwind"],
  title: "Nepal Picture Library",
  Icon: <FaCameraRetro className="ml-1 inline" />,
  intro:
    "Nepal Picture Library is an attempt to create a broad and inclusive visual archive of Nepal's history and culture. It is run by photo.circle, and helping them in their mission has been an incredible opportunity for me.",
};

const Website = () => {
  return <Landing />;
};

export default function NepalPictureLibrary({ className }) {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel
        mainContent={<Website />}
        hiddenContent={<ProjectDescription {...description} />}
      />
    </div>
  );
}
