import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import trackItImage from '../images/trackIt.png';
import classNames from 'classnames';
import { BsBootstrap } from 'react-icons/bs';
import { DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { FcScatterPlot } from 'react-icons/fc';

const TrackIt = ({className, Ref, scrollUp, scrollDown}) => {
    const mainClass = classNames(className,'bg-between-the-clouds');
    const projectClass = "flex flex-col h-1/2 md:flex-row";
    const buttonClass = 'animate-bounce text-5xl hover:text-white mt-5';
    const linkClass = "m-1 rounded-lg p-1 cursor-pointer underline hover:no-underline hover:text-white hover:bg-gray-800";
    const iconClass = "mr-2 inline"
    return(
        <div ref={Ref} className={mainClass}>
            {scrollUp && <div className="flex mt-10 transform rotate-180 relative font-thin justify-center invisible md:visible">
                <a onClick={(e)=>{e.preventDefault();scrollUp()}} className={buttonClass} href='/#'>V</a>
            </div>}
            <div className={projectClass}>
                <div className="w-full flex justify-center">
                    <img className="object-contain" src={trackItImage} alt="screenshot of a cafeteria website"/>
                </div>
                <div className="m-0.5 p-3 w-full flex flex-col justify-center animate-fadeIn">
                    <p className="mb-3">
                    <a 
                        href="https://github.com/Schapagain/fin-track-server" 
                        target="_blank" 
                        rel="noreferrer">Track It</a> <FontAwesomeIcon icon="money-check-alt" className="ml-1" />
                    </p>
                    <p className="mb-3">
                        I wrote simple Python scripts that exposed CLI functions to keep track of my incomes and expenses.
                        When I was just beginning to learn web development, it seemed like a great opportunity to upgrade form 
                        CLI to a web app. This is a result of that transition.
                    </p>
                    <p>
                        <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                        Categorization of transactions <br/>
                        <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                        Cumulative plots of all activities in any chosen range<br/>
                        <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                        Bar plots to compare transactions acorss categories<br/>
                        <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                        Awareness of your spending habits<br/>
                    </p>
                    <p className="mt-3">
                        Technologies used:<br/>
                        <BsBootstrap className={iconClass}/>
                        Reactstrap<br/>
                        <DiNodejsSmall className={iconClass}/>
                        Node/Express<br/>
                        <FcScatterPlot className={iconClass}/>
                        Plotly.js<br/>
                        <DiMongodb className={iconClass}/>
                        MongoDB
                    </p>
                </div>    
                
            </div>
            <div className="flex mb-2 text-center relative font-lightweight justify-center invisible md:visible">
                <p>
                Thanks for visiting!<br/>
                I am working my hardest to put up more of my projects here, but that's all of it for now.<br/>
                Please 
                <a onClick={(e)=>{e.preventDefault();scrollDown()}} className={linkClass} href='/#'>reach out</a>
                for more information.
                </p>
            </div>
        </div>
    )
}

export default TrackIt;