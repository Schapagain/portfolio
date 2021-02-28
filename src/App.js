import Landing from './components/Landing';
import AppNavbar from './components/AppNavbar';
import { faCode, faCheckCircle, faMoneyCheckAlt ,faMugHot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {useState} from 'react';
import Projects from './components/Projects';
import ContactCard from './components/ContactCard';
library.add(faCode,faCheckCircle,faMoneyCheckAlt,faMugHot);


function App() {

  const [page,setPage] = useState("home");

  return (
    <div className="container min-w-min-md max-w-screen-xl flex flex-col justify-between mx-auto h-screen p-3 back bg-blue-200">
        <AppNavbar setPage={setPage} currentPage={page}/>
        {page === "home" && <Landing setPage={setPage}/>}
        {page === "projects" && <Projects />}
        {page === "contact" && <ContactCard />}
        <footer className="text-center">
          <div className="">
          <p>Perfection is not when there is no more to add, but no more to take away. — Antoine De Saint-Exupéry
          </p>
          </div>
        </footer>
    </div>
  );
}

export default App;