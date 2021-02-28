import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';

const ContactCard = ({className,Ref}) => {
    const mainClass = classNames(className,'flex flex-col justify-center w-full')

    return(
        <div ref={Ref} className={mainClass}>
            
            <div className="w-1/3 m-auto flex flex-col p-5">
                <div className="text-black text-center">
                    I am always open to cool new ideas. <br/> 
                    Feel free to reach out!
                </div>
                <div className="bg-purple-500 p-3 rounded-lg mt-5">
                    <h1 className="text-2xl text-center underline p-2">Sandesh Chapagain</h1>
                    <p className="text-sm text-center">chapagainsandesh {"{{89-1}}"} @gmail.com</p>
                    <div className="p-3 flex justify-center text-3xl">
                        <a 
                        href="https://www.linkedin.com/in/schapagain/" 
                        target="_blank" 
                        rel="noreferrer"
                        >
                            <FontAwesomeIcon 
                            className="m-1" 
                            icon={['fab','linkedin']}
                            />
                        </a>
                        <a 
                        href="https://www.github.com/Schapagain/" 
                        target="_blank" 
                        rel="noreferrer"
                        >
                            <FontAwesomeIcon 
                            className="m-1" 
                            icon={['fab','github']} 
                            />    
                        </a>
                    </div>
                </div>
                
            </div> 
        </div>
    )
}

export default ContactCard;