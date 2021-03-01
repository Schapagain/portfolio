import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cafeRioImage from '../images/cafeRio.png';
import classNames from 'classnames';

const CafeRio = ({className, Ref, scrollToSecondProject}) => {
    const buttonClass = 'animate-bounce text-5xl hover:text-white mt-5';
    const mainClass = classNames(className,'w-full');
    const projectClass = "flex flex-col h-1/2 md:flex-row";
    return(
        <div ref={Ref} className={mainClass}>
            <div className={projectClass}>
                <div className="w-full flex">
                        <img className="object-contain" src={cafeRioImage} alt="screenshot of a cafeteria website"/>
                </div>
                <div className="m-0.5 flex flex-col p-3 w-full justify-center">
                    <p className="">
                            Cafe Rio <FontAwesomeIcon icon="mug-hot" className="ml-1" />
                    </p>
                        <p className="mt-3 mb-3">
                            This is a web application we built for an online hackathon. 
                            The idea was to make something that would help employees order food from their office cafeteria.    
                        </p>
                        <p>
                            <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                            Registration with an office id card <br/>
                            <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                            Email verifications to validate user accounts<br/>
                            <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                            Secure payments through credit and debit cards<br/>
                            <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                            Easy menu updates through an admin account<br/>
                        </p>
                        <p className="mt-3">
                            Technologies used:<br/>
                            <FontAwesomeIcon icon="code" className="mr-2"/>
                            React/Redux<br/>
                            <FontAwesomeIcon icon="code" className="mr-2"/>
                            Node/Express<br/>
                            <FontAwesomeIcon icon="code" className="mr-2"/>
                            JWTs<br/>
                            <FontAwesomeIcon icon="code" className="mr-2"/>
                            MongoDB
                        </p>
                    </div>    
            </div>
            <div className="flex relative font-thin justify-center invisible md:visible">
                <a onClick={(e)=>{e.preventDefault();scrollToSecondProject()}} className={buttonClass} href='/#'>V</a>
            </div>
        </div>
    )
}

export default CafeRio;