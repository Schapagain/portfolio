import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { ButtonHTMLAttributes } from "react";

const PaginationDot = ({
  page,
  active,
  ...props
}: {
  page: number;
  active: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      aria-label={`go to slide ${page}`}
      className={
        "block mx-1 w-3 h-3 rounded-full " +
        (active ? "bg-transparent border border-spring-rain" : "bg-spring-rain")
      }
    ></button>
  );
};

const getPrevIndex = (current: number, total: number) =>
  current === 0 ? total - 1 : current - 1;
const getNextIndex = (current: number, total: number) => (current + 1) % total;

export type Carousel = {
  items: ReactNode[];
  className: string;
  label?: string;
};

export default function Carousel({
  items,
  className,
  label = "projects",
}: Carousel) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((current) => getNextIndex(current, items.length));
  };
  const handlePrev = () => {
    setCurrent((current) => getPrevIndex(current, items.length));
  };
  const handlePagination = (page: number) => {
    console.log("handling pagination");
    if (page < 0 || page >= items.length || page === current) return;
    setCurrent(page);
  };

  const buttonClasses = classNames(
    "absolute z-50 text-3xl lg:text-4xl p-3 rounded-full",
    "top-1/2 transform -translate-y-1/2"
  );

  const prevClasses = classNames(buttonClasses, "-left-0 bg-turq-left");
  const nextClasses = classNames(buttonClasses, "-right-0 bg-turq-right");

  const slideClasses = classNames(
    "md:w-96 lg:w-5/12 mx-auto h-full absolute top-0",
    "transition-left transform -translate-x-1/2 duration-700 ease-in-out"
  );

  const projectsLabelClasses = classNames(
    "absolute p-1 uppercase text-white text-2xl lg:text-3xl transform -translate-y-1/2",
    "transition duration-700 ease-in-out font-['Cinzel']",
    {
      "opacity-100 bg-turq-left": current === 0,
      "opacity-0": current > 0 && current < items.length - 1,
      "opacity-100 bg-turq-right -translate-x-1/2":
        current === items.length - 1,
    }
  );

  return (
    <div
      data-active-item={current}
      className={className + " carousel flex w-full max-w-screen-xl relative"}
    >
      <div>
        {current !== 0 && (
          <span
            role="button"
            aria-label="previous"
            onClick={handlePrev}
            className={prevClasses}
          >
            <AiOutlineDoubleLeft />
          </span>
        )}
        {current !== items.length - 1 && (
          <span
            role="button"
            aria-label="next"
            onClick={handleNext}
            className={nextClasses}
          >
            <AiOutlineDoubleRight />
          </span>
        )}
        <span className="w-2screen absolute h-1 bg-white top-1/2 transform -translate-y-1/2 -left-full" />

        <span
          style={{
            top: "50%",
            left:
              current === 0
                ? "5%"
                : current === items.length - 1
                ? "90%"
                : "-1000%",
          }}
          className={projectsLabelClasses}
        >
          {label}
        </span>
        <div className="absolute z-10 flex bottom-0 left-1/2 -translate-x-1/2 ">
          {items.map((item, index) => (
            <PaginationDot
              key={"carousel-pagination-dot-" + index}
              page={index}
              active={index === current}
              onClick={() => handlePagination(index)}
            />
          ))}
        </div>
      </div>
      {items.map((item, index) => (
        <div
          key={"carousel-item-" + index}
          style={{
            left: `${(index - current) * 200 + 50}%`,
          }}
          className={slideClasses}
          data-active={current === index}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
