import React from "react";
import ContactCard from "./ContactCard";
import { useRef } from "react";
import AppNavbar from "./AppNavbar";
import CafeRio from "./CafeRio";
import TrackIt from "./TrackIt";
import BlockByBlock from "./BlockByBlock";
import Landing from "./Landing";

export default function MainContainer() {
  const contactRef = useRef(null);
  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  const cafeRioRef = useRef(null);
  const scrollToCafeRio = () =>
    cafeRioRef.current.scrollIntoView({ behavior: "smooth" });

  const trackItRef = useRef(null);
  const scrollToTrackIt = () =>
    trackItRef.current.scrollIntoView({ behavior: "smooth" });

  const blockByBlockRef = useRef(null);
  const scrollToBlockByBlock = () =>
    blockByBlockRef.current.scrollIntoView({ behavior: "smooth" });

  const homeRef = useRef(null);
  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });

  const projectClass =
    "w-full flex flex-col p-4 h-screen bg-indigo-200 justify-between";
  return (
    <div className="w-full mx-auto justify-center flex flex-col">
      <Landing
        scrollToProjects={scrollToBlockByBlock}
        scrollToContact={scrollToContact}
        Ref={homeRef}
        className="h-screen z-50"
      />
      <AppNavbar
        scrollToContact={scrollToContact}
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToBlockByBlock}
        className="flex justify-between p-2 mt-0 w-full fixed z-30 top-0"
      />
      <BlockByBlock
        Ref={blockByBlockRef}
        className={projectClass}
        scrollDown={scrollToCafeRio}
        scrollUp={scrollToHome}
      />
      <CafeRio
        Ref={cafeRioRef}
        className={projectClass}
        scrollUp={scrollToBlockByBlock}
        scrollDown={scrollToTrackIt}
      />
      <TrackIt
        scrollUp={scrollToCafeRio}
        scrollDown={scrollToContact}
        Ref={trackItRef}
        className={projectClass}
      />
      <ContactCard Ref={contactRef} className="min-h-screen" />
    </div>
  );
}
