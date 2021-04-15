import classNames from "classnames";
import CafeRio from "./CafeRio";
import BlockByBlock from "./BlockByBlock";
import Carousel from "./Carousel";

const UnderlinedText = ({ className, text, link }) => {
  const lineClasses = classNames(
    "bg-white absolute z-20 bottom-0 left-1/2",
    "transform -translate-x-1/2",
    "w-4/5 h-1 rounded-xl"
  );

  const lineMaskClasses = classNames(
    "transition-width duration-500 ease",
    "w-1/3 hover:w-full bg-blue-600"
  );

  return (
    <a
      onClick={(e) => {
        if (!link) e.preventDefault();
      }}
      className={className}
      href={link || "#"}
      target="_blank"
      referrerPolicy="no-referrer"
      rel="noreferrer"
    >
      <span className="relative hover:opacity-50 p-2">
        <span>{text}</span>
        <span aria-hidden={true} className={lineClasses} />
        <span aria-hidden={true} className={lineMaskClasses} />
      </span>
    </a>
  );
};

const Landing = ({ className }) => {
  const mainClass = classNames(
    className,
    "text-white flex mx-auto items-center text-center flex-col",
    "h-screen w-full max-w-screen-2xl overflow-hidden p-10"
  );
  const headingClass = "text-3xl mb-2";
  const introClass = "text-lg 2xl:text-xl";
  const mainTextClass =
    "flex text-md z-30 flex-col w-full h-2/6 md:w-1/2 p-5 justify-center";

  const projectsClass = classNames(
    "w-full h-full flex flex-col z-40 justify-between"
  );

  return (
    <main className={mainClass}>
      <div className={mainTextClass}>
        <h1 className={headingClass}>Hi there. I am Sandesh.</h1>
        <div className={introClass}>
          <p>I love building stuff for the web.</p>
          <p>
            Please check out my
            {
              <UnderlinedText
                className="mx-1 text-3xl my-3 inline-block"
                text="github"
                link="https://www.github.com/Schapagain/"
              />
            }
            to explore more of what I've worked on.
          </p>
        </div>
      </div>

      <Carousel
        className="md:w-9/12 h-4/6"
        items={[
          <CafeRio key="cafe-rio" className={projectsClass} />,
          <BlockByBlock key="block-by-block" className={projectsClass} />,
        ]}
      />
    </main>
  );
};

export default Landing;
