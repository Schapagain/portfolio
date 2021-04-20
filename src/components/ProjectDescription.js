import { HiChevronDoubleUp, HiPlus } from "react-icons/hi";
import Tooltip from "./Tooltip";
import Line from "./Line";

export default function ProjectDescription({
  title,
  link,
  intro,
  Icon,
  newSkills,
  upgradedSkills,
}) {
  const iconClass = "mr-2 inline";
  return (
    <div className="m-0.5 bg-spring-rain text-sm text-black rounded-r-xl flex flex-col p-3 w-full justify-center">
      <p className="font-fira-mono text-xl">
        <a href={link || "#"} target="_blank" rel="noreferrer">
          {title}
        </a>
        {Icon}
        <Line />
      </p>
      <p className="mt-3 text-base mb-3">{intro}</p>
      <div className="mt-3 text-base relative">
        <p className="uppercase">Skills/Technologies</p>
        <Line />
        {newSkills.map((skill) => (
          <div key={skill}>
            <Tooltip text="Used it for the first time">
              <HiPlus className={iconClass + " text-xl text-calypso"} />
            </Tooltip>
            {skill}
          </div>
        ))}
        {upgradedSkills.map((skill) => (
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
