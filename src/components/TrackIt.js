import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cafeRioImage from '../images/trackIt.png';
import classNames from 'classnames';

const TrackIt = ({className}) => {
    const mainClass = classNames(className,'w-full');
    return(
        <div className={mainClass}>
            <div className="w-full md:w-1/2">
                <img className="rounded-xl w-full object-contain" src={cafeRioImage} alt="screenshot of a cafeteria website"/>
            </div>
            <div className="m-0.5 p-3 w-full md:w-1/2">
                <p className="heading">
                    Track It <FontAwesomeIcon icon="money-check-alt" className="ml-1" />
                </p>
                <p>
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
                <p>
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
    )
}

export default TrackIt;