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
    <div className="lg:text-left box-border p-4 bg-spring-rain text-sm text-black rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl flex flex-col w-full justify-center">
      <p className="text-xl">
        <a href={link || "#"} target="_blank" rel="noreferrer">
          {title}
        </a>
        {Icon}
        <Line className="lg:mx-0" />
      </p>
      <p className="text-sm lg:text-base mb-3">{intro}</p>
      <div className="text-base relative">
        <p className="uppercase">Skills/Technologies</p>
        <Line className="lg:mx-0" />
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
