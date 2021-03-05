import React,{ useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi';
import classNames from 'classnames';
import { useSpring, animated, config } from 'react-spring';

export default function SlidingPanel({ hiddenContent, mainContent }) {
    const [panelVisible, setPanelVisible] = useState(true);

    const mainContentProps = useSpring({
        to : {
            opacity: 1,
            left: panelVisible ? '0%' : '-30%',
            width: panelVisible ? '100%' : '90%'
        },
        from : {
            opacity: 0,
            left: panelVisible ? '-30%' : '0%',
            width: !panelVisible ? '90%' : '100%'
        },
        config: config.slow
    });

    const hiddenContentProps = useSpring({
        to : {
            opacity: 1,
            right: panelVisible ? '0%' : '-30%',
        },
        from : {
            opacity: 0,
            right: panelVisible ? '-30%':'0%',
        },
    })

    const websiteClass = classNames('flex-col flex justify-end z-10 lg:absolute w-full h-1/2 lg:h-full -left-0 top-0',{

    })
    const descriptionClass = classNames('flex text-sm md:text-md lg:text-lg h-1/2 lg:h-full right-0 lg:absolute w-full lg:w-2/3');

    return (
        <div className="lg:relative flex-col lg:flex h-full lg:h-2/3 w-full md:w-2/3 lg:w-1/2 m-auto">
            <animated.div style={mainContentProps} className={websiteClass}>
                <div className="flex h-1/2 h-full w-full">
                    {mainContent}
                </div>
                <div
                onClick={()=>setPanelVisible(!panelVisible)} 
                style = {{backgroundColor:'#8f8e8b'}}
                className={
                `absolute right-0 flex hidden 
                lg:flex rounded-r-xl
                my-auto h-full cursor-pointer`}>
                <FiMoreVertical 
                className="my-auto"
                />    
                </div>
            </animated.div>
            <animated.div style={hiddenContentProps} className={descriptionClass}>
                {hiddenContent}
            </animated.div>
        </div>
    )
}