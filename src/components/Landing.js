import classNames from 'classnames';
import DeskSetup from './DeskSetup';
import Typed from 'typed.js';
import { useEffect } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import * as easings from 'd3-ease';

const LandingGraphics = () => {
    return (
        <div className="w-1/2 flex bg-theme-color">
            <DeskSetup className="m-auto"/>
        </div>
    )
}


const Landing = ({className,Ref,scrollToProjects,scrollToContact}) => {

    const mainClass = classNames(className,'flex bg-theme-color justify-center text-center');
    const buttonClass = 'hover:bg-gray-600 hover:text-white text-black bg-white p-3 ml-2 mr-2 mt-5 rounded-md';
    const headingClass = 'text-3xl mb-2 typed-span';
    const introClass = 'text-xl';
    const buttonGroupClass = 'flex justify-center'
    const mainTextClass = 'flex z-30 flex-col w-full md:w-1/2 p-5 justify-center';

    const headOptions = {
        startDelay: 3500,
        strings : ["Hello there."],
        typeSpeed: 60,
        loop: false,
        showCursor: false,
        onComplete : () => startIntroText()
    };

    const startIntroText = () => {
        new Typed('.typed-text',textOptions);
    }

    const textOptions = {
        startDelay: 500,
        strings : ["I build things with code."],
        typeSpeed: 60,
        loop: false,
        showCursor: false
    };

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            new Typed('.typed-span',headOptions)
        }
    });

    return(
        <main ref={Ref} className={mainClass}>
            <LandingGraphics />
            <div className={mainTextClass}>
                <h1 className={headingClass}></h1>
                <div className={introClass}>
                    <p className="typed-text"></p>
                </div>
                <Spring
                reset
                from={{opacity:0}} 
                to={{opacity:1}}
                config={{delay:7500,easing:easings.easePolyInOut}}
                >
                    {props => (
                    <animated.div style={props} className={buttonGroupClass}>
                        <a onClick={(e)=>{e.preventDefault();}} className={buttonClass} href='/#'>Get in touch</a>
                        <a onClick={(e)=>{e.preventDefault();}} className={buttonClass} href='/#'>Checkout my projects</a>
                    </animated.div>  
                    )}
                </Spring>  
            </div>
        </main>
    )
}

export default Landing;