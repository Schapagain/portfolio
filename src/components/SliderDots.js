
const Dot = ({setProject,projectName,currentProject}) => {
    return (
        <div 
        onClick={() => setProject(projectName)} 
        className={`${currentProject === projectName ? "active " : ""}dot mt-3 m-2`}
        >
        </div>
    )
}

const SliderDots = ({projectNames,setProject,currentProject}) => {

    return(
        <div className="slider-dots d-flex justify-content-center">
            {projectNames && 
            projectNames.map(projectName => 
            <Dot 
            key={projectName} 
            setProject={setProject} 
            projectName={projectName} 
            currentProject={currentProject}
            />)}
        </div>
    )
}

export default SliderDots;