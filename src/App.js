import Landing from './components/Landing';
import { faCode, faCheckCircle, faMoneyCheckAlt ,faMugHot} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import Projects from './components/Projects';
import ContactCard from './components/ContactCard';
import {useRef} from 'react';
import AppNavbar from './components/AppNavbar'
library.add(faCode,faCheckCircle,faMoneyCheckAlt,faMugHot,faLinkedin,faGithub);

function App() {
    const contactRef = useRef(null);
    const scrollToContact = () => contactRef.current.scrollIntoView({behavior:'smooth'});

    const projectsRef = useRef(null);
    const scrollToProjects = () => projectsRef.current.scrollIntoView({behavior:'smooth'});

    const homeRef = useRef(null);
    const scrollToHome = () => homeRef.current.scrollIntoView({behavior:'smooth'});

  return (
    <div className="container min-w-max-md max-w-screen-xl flex flex-col justify-between mx-auto back bg-blue-200">
        <Landing 
        scrollToProjects={scrollToProjects} 
        scrollToContact={scrollToContact}
        Ref={homeRef} 
        className="min-h-screen z-20 bg-blue-200"/>
        <AppNavbar 
        scrollToContact={scrollToContact}
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToProjects}
        className="flex justify-between p-2 mt-0 w-full fixed z-1 top-0 bg-blue-700 text-white"/>
        <Projects Ref={projectsRef} className="min-h-screen w-full"/>
        <ContactCard Ref={contactRef} className="min-h-screen"/>
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