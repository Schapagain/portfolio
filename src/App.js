
import { 
  faCode, 
  faCheckCircle, 
  faMoneyCheckAlt,
  faMugHot,
  faCloudSunRain,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import MainContainer from './components/MainContainer';

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
    const mainClass = "w-full bg-theme-color min-w-max-md flex flex-col justify-between mx-auto"
  return (
    <div className={mainClass}>
        <MainContainer />
    </div>
  );
}

export default App;