import React, { useRef, useEffect, useState } from 'react'
import { Spring, animated } from 'react-spring/renderprops';
import * as easings from 'd3-ease';

function Head({duration,delay,easing}) {

    return(
        <Spring
            reset
            from={{opacity:0}} 
            to={{opacity:1}}
            config={{duration,delay,easing}}
            >
                {props => (
                    <g
                    id="head"
                    opacity={props.opacity}
                    >
                        <path id="path1376" 
                        d="M247.988 111.891C264.4 101.127 269.55 98.5306 270.723 89.9743C271.896 81.418 271.967 81.5081 271.967 81.5081C271.967 81.5081 273.714 83.3926 275.957 85.4329C277.919 87.199 280.231 89.3545 283.189 89.443C289.504 90.0576 296.594 82.8812 296.594 82.8812C296.594 82.8812 293.704 94.2071 297.146 99.0891C300.588 103.971 306.639 110.234 309.457 111.275C308.893 121.227 288.955 131.491 272.12 120.132C255.285 108.774 232.272 144.117 255.117 111.727L247.988 111.891Z" 
                        fill="#C9A699"/>
                        <path 
                        id="face" 
                        d="M253.207 32.5892C253.207 32.5892 248.555 53.0887 254.292 64.2409C260.028 75.393 278.018 97.3623 281.607 96.2722C288.996 97.9141 296.435 85.753 297.297 84.6697C305.468 74.4086 303.046 76.9762 310.874 66.102C329.233 40.5993 309.135 26.7956 309.768 21.5322C310.401 16.2688 296.228 15.2106 285.284 16.1352C274.34 17.0597 266.375 16.2396 261.198 18.8151C256.02 21.3905 253.207 32.5892 253.207 32.5892H253.207Z" 
                        fill="#C9A699"
                        />
                        <path id="ear" 
                        d="M308.989 51.3025C308.989 51.3025 313.672 41.0712 315.423 47.4264C317.175 53.7816 313.088 65.3754 311.224 65.2261C309.359 65.0768 307.216 59.2304 307.537 58.0516C307.86 56.8735 312.147 59.0201 312.141 56.3395C312.135 53.6589 315.897 51.2739 312.24 51.3816C308.583 51.4892 308.99 51.3025 308.99 51.3025H308.989Z" 
                        fill="#B38675"
                        />
                        <path 
                        id="hair" 
                        d="M251.977 19.3235C254.207 13.034 259.358 -0.243813 276.987 3.31462C286.62 -1.84599 304.722 -1.60028 315.765 8.49982C318.186 11.6121 330.9 22.6969 326.745 37.3408C324.347 45.7898 319.917 50.9007 316.187 56.9082C314.627 53.912 316.164 43.546 311.87 47.2486C310.403 48.5135 309.048 52.8852 307.037 57.4345C304.108 58.0876 306.039 57.712 304.748 57.9558C303.314 54.0999 303.927 35.4958 301.361 33.718C294.579 29.0197 287.107 23.1949 281.146 23.3428C275.949 33.56 270.059 38.1205 261.029 41.5393C255.472 43.6436 253.547 43.2729 248.187 46.6558C248.232 42.1265 250.134 26.4369 250.134 26.4369L251.977 19.3235Z" 
                        fill="#131313"
                        />

                     </g>
                )}
        </Spring>
    )
}

function LowerShirt({duration,delay,easing}) {
    return(
        <Spring
            reset
            from={{opacity:0}} 
            to={{opacity:1}}
            config={{duration,delay,easing}}
            >
                {props => (
                    <path
                    opacity={props.opacity}
                    id="lowershirt" 
                    d="M244.018 152.223C244.149 166.402 243.563 213.108 248.603 215.418C253.644 217.727 335.19 229.528 335.19 229.528C335.19 229.528 338.155 190.899 339.254 166.505C340.354 142.11 323.381 135.164 323.381 135.164L242.183 120.495L244.018 152.223Z" 
                    fill="#862E4A"
                    />
                )}
        </Spring>
    )
}

function UpperShirt({duration,delay,easing}) {
    return(
        <Spring
            reset
            from={{opacity:0}} 
            to={{opacity:1}}
            config={{duration,delay,easing}}
            >
                {props => (
                    <path 
                    opacity={props.opacity}
                    id="uppershirt" 
                    d="M218.002 165.354C221.464 165.663 345.385 176.683 350.311 171.264C349.264 169.353 349.095 152.839 347.9 143.457C346.488 132.387 337.818 123.558 336.035 122.071C333.77 120.434 303.347 105.547 302.11 105.14C301.579 117.629 267.382 114.249 257.724 105.29C239.962 112.232 240.563 113.612 232.304 120.36C223.016 127.949 221.47 132.056 221.376 143.693C220.823 149.075 220.363 160.856 218.002 165.354V165.354Z" 
                    fill="#862E4A"
                    />
                )}
        </Spring>
    )
}


function Arms({duration,delay,easing}) {
    return (
        <Spring
        reset
        from={{ opacity: 0 }} 
        to={{ opacity: 1 }}
        config={{duration,delay,easing}}
        >
            {props => (
                <g 
                opacity={props.opacity}
                id="arms"
                >
                    <path 
                    id="right_arm" 
                    d="M138.856 260.491C146.445 243.264 161.672 245.977 161.672 245.977C161.672 245.977 196.929 214.228 203.679 206.953C209.368 194.813 214.734 183.711 218.68 170.415C218.962 162.347 229.644 148.467 230.238 145.298C230.832 142.129 253.059 143.485 253.059 143.485C253.059 143.485 244.253 174.934 237.227 185.341C230.453 195.374 219.091 214.586 208.22 222.779C197.35 230.971 167.692 256.201 167.692 256.201C167.692 256.201 163.35 266.163 157.437 271.314C151.525 276.465 152.431 269.175 153.428 263.039C142.879 266 136.472 267.314 138.856 260.491V260.491Z" 
                    fill="#C9A699"
                    />
                    <path 
                    id="left_arm" 
                    d="M240.187 296.959C251.027 278.165 265.566 277.517 265.566 277.517C265.566 277.517 305.978 231.218 314.557 217.18C316.754 210.255 316.541 209.463 319.043 194.966C320.722 185.235 323.261 168.077 323.261 168.077L349.474 170.578C349.474 170.578 346.087 184.22 341.603 202.837C338.376 216.231 333.203 226.17 329.749 229.993C321.842 238.742 280.596 285.895 277.661 287.392C274.726 288.889 273.861 300.473 267.625 305.809C261.389 311.146 260.776 310.776 260.776 310.776C260.776 310.776 257.07 296.413 261.173 293.32C242.253 302.871 238.289 304.308 238.289 304.308C238.289 304.308 235.285 304.02 240.187 296.959H240.187Z" 
                    fill="#C9A699"
                    />
                </g>
            )}
        </Spring>
    )
}

function Desk({duration,delay,easing}) {
    const pathRef = useRef();
    const [pathLength, setPathLength] = useState(null)
    useEffect(() => {
        let mounted = true;
        if (mounted) setPathLength(pathRef.current.getTotalLength());
        return () => mounted = false;
    },[])
    return (
        <g id="desk">
            <Spring
            reset
            from={{x:pathLength,fill:'#A1B3B5'}} 
            to={{x:0,fill:"#4E3E53"}}
            config={{duration,delay,easing}}
            >
                {props => (
                    <animated.path
                    ref={pathRef} 
                    strokeDashoffset={props.x} 
                    strokeDasharray={pathLength}
                    id="path980" 
                    d="M479.536 255.623C479.536 255.623 416.439 242.139 283.606 220.804C204.993 208.866 197.387 201.212 157.925 190.943C119.295 180.891 124.385 141.521 89.4965 144.687C-6.7825 155.9 -28.8182 346.452 43.6062 441.669C176.469 616.345 615.196 264.185 479.536 255.623V255.623Z" 
                    fill={props.fill}
                    stroke="black" 
                    strokeWidth="2"/>
                )}
            </Spring>
        </g>
    )
}

function MousePad({duration,delay,easing}) {
    const pathRef = useRef();
    const [pathLength, setPathLength] = useState(null)
    useEffect(() => {
        let mounted = true;
        if (mounted) setPathLength(pathRef.current.getTotalLength());
        return () => mounted = false;
    },[])
    return (
        <Spring
            reset
            from={{x:pathLength,fill:'#A1B3B5'}} 
            to={{x:0,fill:"#426966"}}
            config={{duration,delay,easing}}
            >
            {props => (
                <path 
                strokeDashoffset={props.x} 
                strokeDasharray={pathLength}
                ref={pathRef}
                id="mousepad" 
                d="M424.203 251.645L111.291 194.426C108.214 193.863 105.185 196.022 104.525 199.247L89.8584 270.955C89.1987 274.181 91.1583 277.252 94.2355 277.815L407.148 335.034C410.225 335.597 413.254 333.438 413.914 330.212L428.581 258.505C429.24 255.279 427.281 252.208 424.203 251.645Z" 
                fill={props.fill} 
                stroke="black" 
                strokeWidth="1"/>
                )}
        </Spring>
    )
}

function Chair({duration,delay,easing}) {
    const pathRef = useRef();
    const [pathLength, setPathLength] = useState(null)
    useEffect(() => {
        let mounted = true;
        if (mounted) setPathLength(pathRef.current.getTotalLength());
        return () => mounted = false;
    },[])
    return (
        <Spring
            reset
            from={{x:pathLength,fill:'#A1B3B5'}} 
            to={{x:0,fill:"#3E3B3C"}}
            config={{duration,delay,easing}}
            >
            {props => (
                <path 
                strokeDashoffset={props.x} 
                strokeDasharray={pathLength}
                ref={pathRef}
                id="chair" 
                d="M315.503 306.932L351.799 228.759C351.799 228.759 359 133.883 355.448 116.576C353.603 94.4446 221.738 87.6498 219.64 116.898C217.542 146.146 214.437 209.281 223.026 242.096C231.616 274.912 232.62 274.727 257.588 276.36C282.555 277.992 329.111 255.667 335.505 256.501C341.899 257.334 315.503 306.932 315.503 306.932V306.932Z" 
                fill={props.fill} 
                stroke="black" 
                strokeWidth="0.271391"/>
            )}
            </Spring>
    )
}


function Monitor({duration,delay,easing}) {
    const pathRef = useRef();
    const [pathLength, setPathLength] = useState(null)
    useEffect(() => {
        let mounted = true;
        if (mounted) setPathLength(pathRef.current.getTotalLength());
        return () => mounted = false;
    },[])

    return (
        <g id="monitor">
            <Spring
            reset
            from={{x:pathLength,fill:'#A1B3B5'}} 
            to={{x:0,fill:"#686868"}}
            config={{duration,delay,easing}}
            >
                {props => (
                    <g id="monitor">
                        <path 
                        strokeDashoffset={props.x} 
                        strokeDasharray={pathLength}
                        ref={pathRef}
                        id="screen" 
                        d="M286.607 184.733L67.7475 152.374L66.0513 283.691L284.91 316.05L286.607 184.733Z" 
                        fill={props.fill}
                        stroke="black" 
                        strokeWidth="1"
                        />
                        <path 
                        strokeDashoffset={props.x} 
                        strokeDasharray={pathLength}
                        
                        id="platform" 
                        d="M106.374 348.273L210.057 363.926L239.681 332.621L135.998 316.968L106.374 348.273Z" 
                        fill={props.fill}
                        stroke="black" 
                        strokeWidth="1"
                        />
                        <path
                        strokeDashoffset={props.x} 
                        strokeDasharray={pathLength} 
                        
                        id="stand" 
                        d="M150.941 341.703L180.785 345.483L180.188 227.393L150.941 224.204L150.941 341.703Z" 
                        fill={props.fill}
                        stroke="black" 
                        strokeWidth="1"/>
                        <path 
                        strokeDashoffset={props.x} 
                        strokeDasharray={pathLength}
                        
                        id="circle" 
                        d="M165.127 275.27C169.217 275.27 172.533 270.014 172.533 263.53C172.533 257.047 169.217 251.791 165.127 251.791C161.037 251.791 157.721 257.047 157.721 263.53C157.721 270.014 161.037 275.27 165.127 275.27Z" 
                        stroke="black" 
                        strokeWidth="1"/>
                    </g>
                )}
            </Spring>
        </g>
    )
}

export default function DeskSetup({ className }) {
    const firstDuration = 2000;
    const secondDuraction = 1500;
    return (
        <div className={className}>
            <svg width="506" height="491" viewBox="0 0 506 491" fill="none">
                <Chair 
                delay={0} 
                duration={firstDuration} 
                easing={easings.easeQuadInOut}
                />
                <Head 
                delay={firstDuration} 
                duration={secondDuraction}
                easing={easings.easeQuadInOut}
                />
                <LowerShirt 
                delay={firstDuration} 
                duration={secondDuraction} 
                easing={easings.easeQuadInOut}
                />
                <Desk 
                delay={0} 
                duration={firstDuration} 
                easing={easings.easeQuadInOut}
                />
                <MousePad 
                delay={0} 
                duration={firstDuration} 
                easing={easings.easeQuadInOut}
                />
                <Arms 
                delay={firstDuration} 
                duration={secondDuraction}
                easing={easings.easeQuadInOut}
                />
                <Monitor 
                delay={0} 
                duration={firstDuration} 
                easing={easings.easeQuadInOut}
                />
                <UpperShirt 
                delay={firstDuration} 
                duration={secondDuraction}
                easing={easings.easeQuadInOut}
                />
            </svg>
        </div>
        
    )
}