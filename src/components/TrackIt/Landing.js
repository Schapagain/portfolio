import NavBar from './NavBar';
import Button from '../Button';
import Overlay from '../Overlay';

const webLink = "https://fin-track.netlify.app/";
const IntroText = () => {
    return(
        <div className="z-50 text-center text-white">
            <p className="text-3xl mb-4">Be aware of your finances</p>
            <div className="text-xl">
                   
            </div>
        </div>
    )
}

const Landing = () => {
    return (
        <div className="relative rounded-2xl w-full h-full p-4 bg-spring-rain justify-between flex flex-col">
            <Overlay color="black" opacity="20"/>
            <NavBar className="z-50" webLink={webLink}/>
            <div className="sm:flex-row flex flex-col h-2/3 my-auto justify-center">
                <div className="flex my-auto m-3 w-full sm:w-1/2 flex-col">
                    <IntroText />
                    <Button 
                    href={webLink}
                    className="rounded-full hover:bg-indigo-600"
                    text="Let's track it!" 
                    />    
                </div>
            </div>
        </div>
    )
}

export default Landing;