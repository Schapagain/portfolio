import NavBar from './NavBar';
import { FaCalendarPlus } from 'react-icons/fa';
import { RiRepeatOneLine } from 'react-icons/ri';
import CalendarIcon from './CalendarIcon';
import { BsArrowUpDown, BsArrowDown } from 'react-icons/bs';
import Button from './Button';



const IntroText = () => {
    return(
        <div className="text-center">
            <p className="text-3xl mb-4">Keepings habits simple.</p>
            <div className="text-xl">
                <p>Track your habits,</p>
                <p>block by block.</p>    
            </div>
        </div>
    )
}

const Landing = () => {
    const arrowStyles = "m-auto text-2xl text-calypso stroke-1";

    return (
        <div className="rounded-xl w-full h-full p-4 bg-spring-rain justify-between flex flex-col">
            <NavBar />
            <div className="md:flex-row flex flex-col h-2/3 my-auto justify-center">
                <div className="flex my-auto m-3 w-full lg:w-1/2 flex-col">
                    <IntroText />
                    <Button 
                    className="rounded-full"
                    text="Get started" 
                    />    
                </div>
                <div className="m-2 hidden lg:flex w-1/2 flex-col">
                    <Button 
                    text="Add a habit" 
                    className="rounded-full"
                    icon={<FaCalendarPlus/>}
                    />
                    <BsArrowDown className={arrowStyles} />
                    <CalendarIcon />
                    <BsArrowUpDown className={arrowStyles} />
                    <Button 
                    className="rounded-full"
                    text="Keep at it!" 
                    icon={<RiRepeatOneLine />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing;