import React, { useState } from "react";
import classNames from "classnames";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const getPrevIndex = (current, total) =>
  current === 0 ? total - 1 : current - 1;
const getNextIndex = (current, total) => (current + 1) % total;

export default function Carousel({ items, className }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((current) => getNextIndex(current, items.length));
  };
  const handlePrev = () => {
    setCurrent((current) => getPrevIndex(current, items.length));
  };

  const buttonClasses = classNames(
    "absolute z-50 text-4xl p-3 rounded-full",
    "top-1/2 transform -translate-y-1/2"
  );

  const prevClasses = classNames(buttonClasses, "-left-16 bg-turq-left");
  const nextClasses = classNames(buttonClasses, "-right-16 bg-turq-right");

  const slideClasses = classNames(
    "w-full h-full absolute top-0",
    "transition-left duration-700 ease-in-out"
  );

  const projectsLabelClasses = classNames(
    "absolute p-1 uppercase text-3xl top-1/2 transform -translate-y-1/2",
    "transition duration-700 ease-in-out",
    {
      "opacity-100 bg-turq-left": current === 0,
      "opacity-0": current > 0,
      "opacity-100 bg-turq-right": current === items.length - 1,
    }
  );

  return (
    <div className={className + " relative"}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            left: `${(index - current) * 200}%`,
          }}
          className={slideClasses}
        >
          {index !== 0 && (
            <span role="button" onClick={handlePrev} className={prevClasses}>
              <AiOutlineDoubleLeft />
            </span>
          )}
          {item}
          {index !== items.length - 1 && (
            <span role="button" onClick={handleNext} className={nextClasses}>
              <AiOutlineDoubleRight />
            </span>
          )}
          <span className="w-2screen absolute h-1 bg-white top-1/2 transform -translate-y-1/2 -left-full" />

          <span
            style={{
              left:
                current === 0
                  ? "-3%"
                  : current === items.length - 1
                  ? "103%"
                  : null,
            }}
            className={projectsLabelClasses}
          >
            projects
          </span>
        </div>
      ))}
    </div>
  );
}
