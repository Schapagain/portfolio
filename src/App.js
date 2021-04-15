import Landing from "./components/Landing";
import {
  faCode,
  faCheckCircle,
  faMoneyCheckAlt,
  faMugHot,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
  const mainClass =
    "w-full flex relative flex-col bg-turq justify-between mx-auto";

  return (
    <div className={mainClass}>
      <Landing />
    </div>
  );
}

export default App;
