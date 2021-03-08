import NavBar from './NavBar';
import { FaCalendarPlus } from 'react-icons/fa';
import { RiRepeatOneLine } from 'react-icons/ri';
import CalendarIcon from './CalendarIcon';
import { BsArrowUpDown, BsArrowDown } from 'react-icons/bs';
import Button from '../Button';
import Overlay from '../Overlay';

const webLink = "https://block-by-block.netlify.app/";
const IntroText = () => {
    return(
        <div className="text-center text-calypso">
            <p className="text-3xl mb-4">Keepings habits simple.</p>
            <div className="text-xl font-medium">
                <p>Track your habits,</p>
                <p>block by block.</p>    
            </div>
        </div>
    )
}

const Landing = () => {
    const arrowStyles = "m-auto text-2xl text-calypso stroke-1";

    return (
        <div className="rounded-xl relative w-full h-full p-4 bg-cover bg-calendar-in-bed justify-between flex flex-col">
            <Overlay color="white" opacity="40"/>
            <NavBar className="z-50" webLink={webLink}/>
            <div className="md:flex-row w-full flex z-50 flex-col h-2/3 my-auto justify-center">
                <div className="flex my-auto m-3 w-full lg:w-1/2 flex-col">
                    <IntroText />
                    <Button 
                    href={webLink}
                    className="rounded-full hover:bg-calypso"
                    text="Get started" 
                    />
                </div>
                <div className="m-2 hidden lg:flex w-1/2 flex-col">
                    <Button 
                    href={webLink}
                    text="Add a habit" 
                    className="rounded-full hover:bg-calypso"
                    icon={<FaCalendarPlus/>}
                    />
                    <BsArrowDown className={arrowStyles} />
                    <CalendarIcon />
                    <BsArrowUpDown className={arrowStyles} />
                    <Button 
                    href={webLink}
                    className="rounded-full hover:bg-calypso"
                    text="Keep at it!" 
                    icon={<RiRepeatOneLine />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing;