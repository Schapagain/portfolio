import classNames from "classnames";
import { SiRedux, SiJsonwebtokens, SiCoffeescript } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";
import { DiNodejsSmall, DiMongodb } from "react-icons/di";
import SlidingPanel from "./SlidingPanel";
import Landing from "./CafeRio/Landing";

const Description = () => {
  const iconClass = "mr-2 inline";
  return (
    <div className="m-0.5 bg-spring-rain text-sm text-black rounded-r-xl flex flex-col p-3 w-full justify-center">
      <p className="">
        <a
          href="https://github.com/Schapagain/cafe-rio"
          target="_blank"
          rel="noreferrer"
        >
          Cafe Rio
        </a>
        <SiCoffeescript className="ml-1 inline" />
      </p>
      <p className="mt-3 mb-3">
        This is a web application we built for an online hackathon. The idea was
        to make something that would help employees order food from their office
        cafeteria.
      </p>
      <p>
        <GiCheckMark className={iconClass} />
        Registration with an office id card and email verifications <br />
        <GiCheckMark className={iconClass} />
        Secure payments through credit and debit cards
        <br />
        <GiCheckMark className={iconClass} />
        Easy menu updates through an admin account
        <br />
      </p>
      <p className="mt-3">
        Technologies used:
        <br />
        <SiRedux className={iconClass} />
        React/Redux
        <br />
        <DiNodejsSmall className={iconClass} />
        Node/Express
        <br />
        <SiJsonwebtokens className={iconClass} />
        JWTs
        <br />
        <DiMongodb className={iconClass} />
        MongoDB
      </p>
    </div>
  );
};

const Website = () => {
  return <Landing />;
};

const CafeRio = ({ className }) => {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel mainContent={<Website />} hiddenContent={<Description />} />
    </div>
  );
};

export default CafeRio;
