import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import { SiRedux, SiJsonwebtokens } from 'react-icons/si';
import { GiCheckMark } from 'react-icons/gi';
import { DiNodejsSmall, DiMongodb } from 'react-icons/di';
import SlidingPanel from './SlidingPanel';
import Landing from './CafeRio/Landing';

const Description = () => {
    const iconClass = "mr-2 inline";
    return (
        <div className="m-0.5 bg-spring-rain text-black rounded-xl flex flex-col p-3 w-full justify-center">
            <p className="">
            <a 
                href="https://github.com/Schapagain/cafe-rio" 
                target="_blank" 
                rel="noreferrer">Cafe Rio</a><FontAwesomeIcon icon="mug-hot" className="ml-1" />
            </p>
            <p className="mt-3 mb-3">
                This is a web application we built for an online hackathon. 
                The idea was to make something that would help employees order food from their office cafeteria.    
            </p>
            <p>
                <GiCheckMark className={iconClass}/>
                Registration with an office id card <br/>
                <GiCheckMark className={iconClass}/>
                Email verifications to validate user accounts<br/>
                <GiCheckMark className={iconClass}/>
                Secure payments through credit and debit cards<br/>
                <GiCheckMark className={iconClass}/>
                Easy menu updates through an admin account<br/>
            </p>
            <p className="mt-3">
                Technologies used:<br/>
                <SiRedux className={iconClass} />
                React/Redux<br/>
                <DiNodejsSmall className={iconClass}/>
                Node/Express<br/>
                <SiJsonwebtokens className={iconClass}/>
                JWTs<br/>
                <DiMongodb className={iconClass}/>
                MongoDB
            </p>
        </div>    
    )
}

const Website = () => {
    return (
        <Landing />
    )
}

const CafeRio = ({className, Ref, scrollUp, scrollDown}) => {
    const buttonClass = 'animate-bounce text-5xl hover:text-black mt-5';
    const mainClass = classNames(className,'text-white bg-theme-color');
    return(
        <div ref={Ref} className={mainClass}>
            {scrollUp && <div className="flex md:mt-10 transform rotate-180 relative font-thin justify-center invisible md:visible">
                <a onClick={(e)=>{e.preventDefault();scrollUp()}} className={buttonClass} href='/#'>V</a>
            </div>}
            <SlidingPanel mainContent={<Website />} hiddenContent={<Description />} />
            {scrollDown && <div className="flex mb-10 relative font-thin justify-center invisible md:visible">
                <a onClick={(e)=>{e.preventDefault();scrollDown()}} className={buttonClass} href='/#'>V</a>
            </div>}
        </div>
    )
}

export default CafeRio;