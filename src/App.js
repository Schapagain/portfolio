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

    const firstProjectRef = useRef(null);
    const scrollToFirstProject = () => firstProjectRef.current.scrollIntoView({behavior:'smooth'});

    const secondProjectRef = useRef(null);
    const scrollToSecondProject = () => secondProjectRef.current.scrollIntoView({behavior:'smooth'});

    const homeRef = useRef(null);
    const scrollToHome = () => homeRef.current.scrollIntoView({behavior:'smooth'});

    const projectClass = 'mt-20 flex flex-col p-4 h-screen justify-center';
    const mainClass = "container min-w-max-md max-w-screen-xl flex flex-col justify-between mx-auto back bg-blue-200"

  return (
    <div className={mainClass}>
        <Landing 
        scrollToProjects={scrollToFirstProject} 
        scrollToContact={scrollToContact}
        Ref={homeRef} 
        className="min-h-screen z-20 bg-blue-200"/>
        <AppNavbar 
        scrollToContact={scrollToContact}
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToFirstProject}
        className="flex justify-between p-2 mt-0 w-full fixed z-1 top-0 bg-blue-700 text-white"/>
        <CafeRio 
        Ref={firstProjectRef} 
        className={projectClass} 
        scrollToSecondProject={scrollToSecondProject}
        />
        <TrackIt 
        scrollToFirstProject={scrollToFirstProject}
        Ref={secondProjectRef}
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