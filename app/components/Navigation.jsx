import { Link, useMatches } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoMdHome,
} from "react-icons/io";
import { GiNotebook, GiForestCamp } from "react-icons/gi";

import Tooltip from "~/components/Tooltip";
import { useEffect } from "react";

export default function Navigation({ type, tooltip = "top" }) {
  const [menuVisible, setMenuVisible] = useState(true);
  const [ribbonVisible, setRibbonVisible] = useState(false);

  const navItems = [
    {
      Icon: IoMdHome,
      link: "/",
      title: "Go back to the landing page",
      linkType: "internal",
    },
    {
      Icon: GiNotebook,
      link: "https://medium.com/@zagzig",
      title: "Read my medium articles",
      linkType: "external",
    },
    {
      Icon: FaBookReader,
      link: "/library",
      title: "What do I read?",
      linkType: "internal",
    },
    {
      Icon: GiForestCamp,
      link: "https://trailblazer.me/id/sandeshchapagain",
      title: "Checkout Trailblazer profile",
      linkType: "external",
    },
    {
      Icon: IoLogoGithub,
      link: "https://github.com/Schapagain",
      title: "My Github",
      linkType: "external",
    },
    {
      Icon: IoLogoLinkedin,
      link: "https://www.linkedin.com/in/schapagain/",
      title: "Connect with me on LinkedIn",
      linkType: "external",
    },
  ];
  const navigationClasses = classNames({
    "fixed top-5 transition-transform right-0 pr-2 bg-navbar-bg py-2 rounded-l-xl z-20 overflow-visible":
      type === "fixed",
    "translate-x-full": type == "fixed" && !menuVisible,
    "translate-x-0": (type = "fixed" && menuVisible),
  });

  const ribbonClasses = classNames({
    "transition-transform duration-500 -translate-x-14 bg-navbar-bg p-1 rounded-l-xl": true,
  });

  const routeMatches = useMatches();
  const currentPath = routeMatches[routeMatches.length - 1].pathname;

  const handleToggle = () => {
    setMenuVisible((v) => !v);
  };

  const handleTransitionEnd = () => {
    if (!menuVisible) setRibbonVisible(true);
  };

  useEffect(() => {
    if (menuVisible) {
      setRibbonVisible(false);
    }
  }, [menuVisible]);

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY < 5) setMenuVisible(true);
      else setMenuVisible(false);
    };
  }, []);

  return (
    <nav onTransitionEnd={handleTransitionEnd} className={navigationClasses}>
      {ribbonVisible && (
        <button
          onClick={handleToggle}
          className={ribbonClasses}
          aria-label="Open navigation menu"
        >
          <RiMenuFoldFill
            className="mx-2 inline w-8 h-8 2xl:w-10 2xl:h-10"
            aria-hidden="true"
          />
        </button>
      )}

      <ul className="flex relative text-white">
        {navItems.map(({ Icon, ...props }) =>
          !props.link || currentPath === props.link ? null : props.linkType ==
            "internal" ? (
            <li key={props.link} className="relative" aria-label={props.title}>
              <Link to={props.link} aria-label={props.title}>
                <Tooltip text={props.title} location={tooltip}>
                  <Icon
                    className="mx-2 inline w-8 h-8 2xl:w-10 2xl:h-10"
                    aria-hidden="true"
                  />
                </Tooltip>
              </Link>
            </li>
          ) : (
            <li key={props.link} className="relative">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={props.title}
              >
                <Tooltip text={props.title} location={tooltip}>
                  <Icon
                    className="mx-2 inline w-8 h-8 2xl:w-10 2xl:h-10"
                    aria-hidden="true"
                  />
                </Tooltip>
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
