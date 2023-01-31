import classNames from "classnames";

const Dot = ({ setProject, projectName, currentProject }) => {
  return (
    <div
      onClick={() => setProject(projectName)}
      className={`${
        currentProject === projectName ? "bg-gray-400" : "bg-white"
      } m-2 w-5 cursor-pointer rounded h-5`}
    ></div>
  );
};

const SliderDots = ({
  projectNames,
  setProject,
  currentProject,
  className,
}) => {
  const mainClass = classNames(className);
  return (
    <div className={mainClass}>
      {projectNames &&
        projectNames.map((projectName) => (
          <Dot
            key={projectName}
            setProject={setProject}
            projectName={projectName}
            currentProject={currentProject}
          />
        ))}
    </div>
  );
};

export default SliderDots;
