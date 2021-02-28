import CafeRio from './CafeRio';
import TrackIt from './TrackIt';
import {useState} from 'react';
import SliderDots from './SliderDots';

const Projects = props => {

    const [project,setProject] = useState("cafe-rio");
    return(
        <div className="flex flex-col justify-between h-2/3 md:h-1/2">
            {project === "track-it" && <TrackIt />}
            {project === "cafe-rio" && <CafeRio />}  
            <SliderDots projectNames={["cafe-rio","track-it"]} currentProject={project} setProject={setProject} />
        </div>
    )
}

export default Projects;