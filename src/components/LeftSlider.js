import React,{ useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';

export default function SlidingPanel({ hiddenContent, mainContent }) {
    const [panelVisible, setPanelVisible] = useState(true);

    const props = useSpring({
        to : {
            left: panelVisible ? 0 : -300,
            width: panelVisible ? '100%' : '70%'
        },
        from : {
            left: panelVisible ? -300 : 0,
            width: panelVisible ? '70%' : '100%'
        },
    });

    const websiteClass = classNames('flex-col flex justify-end z-10 lg:absolute w-full h-1/2 lg:h-full -left-0 top-0',{

    })
    const descriptionClass = classNames('flex h-1/2 lg:h-full right-0 lg:absolute w-full lg:w-2/3');

    return (
        <div className="lg:relative flex-col lg:flex h-2/3 w-2/3 lg:w-1/2 m-auto">
            <animated.div style={props} className={websiteClass}>
                <div className="flex h-1/2 h-full w-full">
                    {mainContent}
                </div>
                <div
                onClick={()=>setPanelVisible(!panelVisible)} 
                className={
                `absolute right-0 flex bg-gray-400 hidden 
                lg:flex
                my-auto h-full cursor-pointer`}>
                <FiMoreVertical 
                className="my-auto"
                />    
                </div>
            </animated.div>
            <div className={descriptionClass}>
                {hiddenContent}
            </div>
        </div>
    )
}