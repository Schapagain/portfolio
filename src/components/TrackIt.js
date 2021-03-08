import classNames from 'classnames';
import { BsBootstrap } from 'react-icons/bs';
import { DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { GiCheckMark } from 'react-icons/gi';
import { FcScatterPlot } from 'react-icons/fc';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Landing from './TrackIt/Landing';
import SlidingPanel from './SlidingPanel';

const Description = () => {
    const iconClass = "mr-2 inline";
    return (
        <div className="m-0.5 bg-blue-300 rounded-xl p-3 w-full flex flex-col justify-center">
            <p className="mb-3">
            <a 
                href="https://github.com/Schapagain/fin-track-server" 
                target="_blank" 
                rel="noreferrer">Track It</a> <FaMoneyCheckAlt className="ml-1 inline" />
            </p>
            <p className="mb-3">
                A web application that helps you keep track of your incomes and expenses. 
                Automated insights from credit card transactions will be included in future updates.
            </p>
            <p>
                <GiCheckMark className={iconClass}/>
                Categorization of transactions <br/>
                <GiCheckMark className={iconClass}/>
                Cumulative plots of all activities in any chosen range<br/>
                <GiCheckMark className={iconClass}/>
                Bar plots to compare transactions acorss categories<br/>
                <GiCheckMark className={iconClass}/>
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
    )
}

const WebSite = () => {
    return (
        <Landing />
    )
}

const TrackIt = ({className, Ref, scrollUp, scrollDown}) => {
    const mainClass = classNames(className,'bg-theme-color');
    const buttonClass = 'animate-bounce text-5xl hover:text-white mt-5';
    const linkClass = "m-1 rounded-lg p-1 cursor-pointer underline hover:no-underline hover:text-white hover:bg-gray-800";
    return(
        <div ref={Ref} className={mainClass}>
            {scrollUp && <div className="flex mt-10 transform rotate-180 relative font-thin justify-center invisible md:visible">
                <a onClick={(e)=>{e.preventDefault();scrollUp()}} className={buttonClass} href='/#'>V</a>
            </div>}
            <SlidingPanel mainContent={<WebSite />} hiddenContent={<Description />} />
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