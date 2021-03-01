import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import trackItImage from '../images/trackIt.png';
import classNames from 'classnames';

const TrackIt = ({className, Ref, scrollToFirstProject}) => {
    const mainClass = classNames(className,'w-full bg-purple-300');
    const projectClass = "flex flex-col h-1/2 md:flex-row";
    const buttonClass = 'animate-bounce  text-5xl hover:text-white mb-5';
    return(
        <div ref={Ref} className={mainClass}>
            <div className="flex transform rotate-180 relative font-thin justify-center invisible md:visible">
                <a onClick={(e)=>{e.preventDefault();scrollToFirstProject()}} className={buttonClass} href='/#'>V</a>
            </div>
            <div className={projectClass}>
                <div className="w-full flex">
                    <img className="object-contain" src={trackItImage} alt="screenshot of a cafeteria website"/>
                </div>
                <div className="m-0.5 p-3 w-full flex flex-col justify-center animate-fadeIn">
                    <p className="mb-3">
                        Track It <FontAwesomeIcon icon="money-check-alt" className="ml-1" />
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
                           className="rotate-90"i"  <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                            Bar plots to compare transactions acorss categories<br/>
                            <FontAwesomeIcon icon="check-circle" className="mr-2"/>
                            Awareness of your spending habits<br/>
                    </p>
                    <p className="mt-3">
                        Technologies used:<br/>
                        <FontAwesomeIcon icon="code" className="mr-2"/>
                        Reactstrap<br/>
                        <FontAwesomeIcon icon="code" className="mr-2"/>
                        Node/Express<br/>
                        <FontAwesomeIcon icon="code" className="mr-2"/>
                        Plotly.js<br/>
                        <FontAwesomeIcon icon="code" className="mr-2"/>
                        MongoDB
                    </p>
                </div>    
                
            </div>
        </div>
    )
}

export default TrackIt;