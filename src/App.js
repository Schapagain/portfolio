import './App.css';
import Landing from './components/Landing';
import AppNavbar from './components/AppNavbar';
import { faCode, faCheckCircle, faMoneyCheckAlt ,faMugHot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {useState} from 'react';
import Projects from './components/Projects';
library.add(faCode,faCheckCircle,faMoneyCheckAlt,faMugHot);


function App() {

  const [page,setPage] = useState("home");

  return (
    <div className="App">
      <div id="cover-container" className="justify-content-center cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <AppNavbar setPage={setPage} currentPage={page}/>
        {page === "home" && <Landing setPage={setPage}/>}
        {page === "projects" && <Projects />}
        <footer className="mastfoot mt-auto">
          <div className="inner">
          <p>Perfection is not when there is no more to add, but no more to take away. — Antoine De Saint-Exupéry
          </p>
          </div>
        </footer>
      </div>
      
    </div>
  );
}

export default App;