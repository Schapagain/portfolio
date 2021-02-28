import CafeRio from './CafeRio';
import TrackIt from './TrackIt';
import {useState} from 'react';
import SliderDots from './SliderDots';

const Projects = props => {

    const [project,setProject] = useState("cafe-rio");
    return(
        <div className="projects d-flex flex-column">
            {project === "track-it" && <TrackIt />}
            {project === "cafe-rio" && <CafeRio />}
            <SliderDots projectNames={["cafe-rio","track-it"]} currentProject={project} setProject={setProject} />
        </div>
    )
}

export default Projects;