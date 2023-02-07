import classNames from "classnames";
import Carousel from "./Carousel";
import SlidingPanel from "./SlidingPanel";
import { Project } from "../utils/custom.types";

export default function Projects() {
  const projectsClass = classNames(
    "w-full h-full flex flex-col justify-between"
  );

  const projects: Project[] = [
    {
      newSkills: ["Tailwind"],
      upgradedSkills: ["React", "MongoDB", "Node/Express"],
      title: "BlockByBlock",
      intro:
        "This is a minimal full-stack application that allows users to track their daily habits. Users can mark calendars for a block of 30 days for each habit, and track their progress over time.",
      githubLink: "https://github.com/Schapagain/habit-tracker",
      projectImage:
        "https://res.cloudinary.com/skyimages/image/upload/v1675088582/Portfolio/block_by_block_iw2xfh.png",
    },
    {
      newSkills: ["Figma"],
      upgradedSkills: ["React/Redux", "Node/Express", "JWTs", "MongoDB"],
      title: "Cafe Rio",
      intro:
        "This is a web application we built for an online hackathon. The idea was to help employees order food from their office cafeteria.",
      link: "https://cafe-rio.netlify.app/",
      githubLink: "https://github.com/Schapagain/cafe-rio",
      projectImage:
        "https://res.cloudinary.com/skyimages/image/upload/v1675088582/Portfolio/cafe_rio_fgmj8e.png",
    },
    {
      upgradedSkills: ["Figma", "React", "Nodejs", "Github Actions"],
      title: "Virtual Galapagos",
      intro:
        "An interactive digital learningn module devloped by Colgate University faculty and students. The primary goal of this project is to teach chiildren science in an innovate way.",
      link: "https://colgate-virtual-galapagos.netlify.app/",
      githubLink: "https://github.com/Schapagain/ColgateVirtualGalapagos",
      projectImage:
        "https://res.cloudinary.com/skyimages/image/upload/v1675206658/Portfolio/virtual_galapagos_sq8iid.png",
    },
    {
      newSkills: ["Plotly", "MongoDB"],
      upgradedSkills: ["Bootstrap", "React", "Node/Express"],
      title: "TrackIt",
      intro:
        "A transcation logging application to help keep track of personal finances.",
      link: "https://fin-track.netlify.app/",
      githubLink: "https://github.com/Schapagain/fin-track-server",
      projectImage:
        "https://res.cloudinary.com/skyimages/image/upload/v1675729137/Portfolio/track_it_qaxdq1.png",
    },

    {
      newSkills: ["Design"],
      upgradedSkills: ["React", "Integration"],
      title: "Weekend Ideas",
      intro: "A very simple implementation for Bored API",
      link: "https://weekend-ideas.netlify.app/#",
      githubLink: "https://github.com/Schapagain/weekend-ideas",
    },
  ];

  return (
    <div className="w-full md:w-5/6 lg:w-full px-8 sm:px-24 lg:px-0 lg:h-96">
      <Carousel
        className="h-2/3 lg:h-full hidden lg:flex"
        items={projects.map((project) => (
          <div
            key={"carousel-project-" + project.title}
            className={projectsClass}
          >
            <SlidingPanel details={project} />
          </div>
        ))}
      />
      <div className="flex flex-col lg:hidden">
        {projects.map((project) => (
          <div key={"project-list-" + project.title} className={projectsClass}>
            <SlidingPanel details={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
