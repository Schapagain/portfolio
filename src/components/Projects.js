import CafeRio from './CafeRio';
import TrackIt from './TrackIt';
import classNames from 'classnames';

const Projects = ({className,Ref}) => {

    const mainClass = classNames(className,'flex flex-col pt-20 justify-around bg-green-300');
    const projectClass = 'm-auto flex flex-col md:flex-row p-4';
    return(
        <div ref={Ref} className={mainClass}>
            <TrackIt className={projectClass} />
            <CafeRio className={projectClass} />
        </div>
    )
}

export default Projects;