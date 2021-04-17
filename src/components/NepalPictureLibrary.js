import classNames from "classnames";
import { SiRedux, SiJsonwebtokens, SiTailwindcss } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";
import { DiNodejsSmall, DiMongodb } from "react-icons/di";
import { FaCameraRetro } from "react-icons/fa";
import SlidingPanel from "./SlidingPanel";
import Landing from "./NepalPictureLibrary/Landing";

const Description = () => {
  const iconClass = "mr-2 inline";
  return (
    <div className="m-0.5 bg-spring-rain relative text-sm text-black rounded-r-xl flex flex-col p-3 w-full justify-center">
      <p className="">
        <a
          href="https://www.nepalpicturelibrary.org/"
          target="_blank"
          rel="noreferrer"
        >
          Nepal Picture Library*
        </a>
        <FaCameraRetro className="ml-1 inline" />
      </p>
      <p className="mt-3 mb-3">
        Nepal Picture Library is an attempt to create a broad and inclusive
        visual archive of Nepal's history and culture. It is run by
        photo.circle, and helping them in their mission has been an incredible
        opportunity for me.
      </p>
      <p>
        <GiCheckMark className={iconClass} />
        Easy image/collection uploads and taggings through keywords/descriptors
        <br />
        <GiCheckMark className={iconClass} />
        Gallery views of photos and collections <br />
        <GiCheckMark className={iconClass} />
        Filtering and search options within galleries
        <br />
        <GiCheckMark className={iconClass} />
        Administrative portal to easily change frontend content
        <br />
        <GiCheckMark className={iconClass} />
        Role based authorization and content assignment
        <br />
      </p>
      <p className="mt-3">
        Technologies used:
        <br />
        <SiRedux className={iconClass} />
        React
        <br />
        <SiTailwindcss className={iconClass} />
        Tailwind
        <br />
        <DiNodejsSmall className={iconClass} />
        Django
        <br />
        <SiJsonwebtokens className={iconClass} />
        AWS
        <br />
        <DiMongodb className={iconClass} />
        MongoDB
      </p>
      <p className="absolute bottom-5 opacity-70 text-xs">
        * The website I am working on is an updated version of the linked
        website
      </p>
    </div>
  );
};

const Website = () => {
  return <Landing />;
};

export default function NepalPictureLibrary({ className }) {
  const mainClass = classNames(className, "text-white");
  return (
    <div className={mainClass}>
      <SlidingPanel mainContent={<Website />} hiddenContent={<Description />} />
    </div>
  );
}
