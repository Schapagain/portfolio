import Landing from './components/Landing';
import { 
  faCode, 
  faCheckCircle, 
  faMoneyCheckAlt,
  faMugHot,
  faCloudSunRain,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import ContactCard from './components/ContactCard';
import {useRef} from 'react';
import AppNavbar from './components/AppNavbar'
import CafeRio from './components/CafeRio';
import TrackIt from './components/TrackIt';
import BlockByBlock from './components/BlockByBlock';

library.add(
  faCode,
  faCheckCircle,
  faMoneyCheckAlt,
  faMugHot,
  faLinkedin,
  faGithub,
  faCloudSunRain
  );

function App() {
    const contactRef = useRef(null);
    const scrollToContact = () => contactRef.current.scrollIntoView({behavior:'smooth'});

    const cafeRioRef = useRef(null);
    const scrollToCafeRio = () => cafeRioRef.current.scrollIntoView({behavior:'smooth'});

    const trackItRef = useRef(null);
    const scrollToTrackIt = () => trackItRef.current.scrollIntoView({behavior:'smooth'});

    const blockByBlockRef = useRef(null);
    const scrollToBlockByBlock = () => blockByBlockRef.current.scrollIntoView({behavior:'smooth'});

    const homeRef = useRef(null);
    const scrollToHome = () => homeRef.current.scrollIntoView({behavior:'smooth'});

    const projectClass = 'w-full flex flex-col p-4 h-screen bg-indigo-200 justify-between';
    const mainClass = "w-full min-w-max-md flex flex-col justify-between mx-auto back bg-blue-200"

  return (
    <div className={mainClass}>
        <Landing 
        scrollToProjects={scrollToBlockByBlock} 
        scrollToContact={scrollToContact}
        Ref={homeRef} 
        className="min-h-screen z-20"/>
        <AppNavbar 
        scrollToContact={scrollToContact}
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToBlockByBlock}
        className="flex justify-between p-2 mt-0 w-full fixed z-40 top-0"/>
        <BlockByBlock 
        Ref={blockByBlockRef}
        className={projectClass}
        scrollDown={scrollToCafeRio}
        scrollUp={scrollToHome}
        />
        <CafeRio 
        Ref={cafeRioRef} 
        className={projectClass} 
        scrollUp={scrollToBlockByBlock}
        scrollDown={scrollToTrackIt}
        />
        <TrackIt 
        scrollUp={scrollToCafeRio}
        scrollDown={scrollToContact}
        Ref={trackItRef}
        className={projectClass} />
        <ContactCard 
        Ref={contactRef} 
        className="min-h-screen"
        />
        {/* <footer className="text-center mt-10">
          <div className="">
          <p>Perfection is not when there is no more to add, but no more to take away. — Antoine De Saint-Exupéry
          </p>
          </div>
        </footer> */}
    </div>
  );
}

export default App;