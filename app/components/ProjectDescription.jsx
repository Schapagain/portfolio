import { HiChevronDoubleUp, HiPlus } from "react-icons/hi";
import Tooltip from "./Tooltip";
import Line from "./Line";
import { IoLogoGithub } from "react-icons/io";
export default function ProjectDescription({
  title,
  link,
  githubLink,
  intro,
  newSkills,
  upgradedSkills,
}) {
  const iconClass = "mr-2 inline";
  return (
    <div className="lg:text-left box-border p-4 bg-spring-rain text-sm text-black rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl flex flex-col w-full justify-center">
      <p className="text-xl">
        {link ? (
          <a href={link || "#"} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        ) : (
          title
        )}

        {githubLink && (
          <a href={githubLink} target="_blank" aria-label="go to github page">
            <IoLogoGithub className="ml-1 inline" />
          </a>
        )}
        <Line className="lg:mx-0" />
      </p>
      <p className="text-base mb-3">{intro}</p>
      <div className="text-base relative">
        <p className="uppercase">Skills/Technologies</p>
        <Line className="lg:mx-0" />
        {newSkills &&
          newSkills.map((skill) => (
            <div key={skill}>
              <Tooltip text="Used it for the first time">
                <HiPlus className={iconClass + " text-xl text-calypso"} />
              </Tooltip>
              {skill}
            </div>
          ))}
        {upgradedSkills &&
          upgradedSkills.map((skill) => (
            <div key={skill}>
              <Tooltip text="Gained more experience">
                <HiChevronDoubleUp
                  className={iconClass + " text-xl text-calypso"}
                />
              </Tooltip>
              {skill}
            </div>
          ))}
      </div>
    </div>
  );
}
