import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/projects.css'
import cafeRioImage from '../images/cafeRio.png';

const CafeRio = props => {
    return(
        <>
            <main role="main" className="d-flex project mx-auto cover">
               <div className="card">
                    <img src={cafeRioImage} alt="screenshot of a cafeteria website"/>
               </div>
               <div className="description card">
                   <p className="heading">
                        Cafe Rio <FontAwesomeIcon icon="mug-hot" className="ml-1" />
                   </p>
                    <p>
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
                    <p>
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
            </main>
        </>
    )
}

export default CafeRio;