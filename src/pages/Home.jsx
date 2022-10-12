import { useState, useRef } from "react";

import Navigation from "../components/Navigation";
import EventDetails from "../components/Home/EventDetails";
import Registration from "../components/Home/Registration";

const Home = ({ setIsDark, isDark }) => {
  const registrationInputRef = useRef("");

  const transferFocus = () => {
    registrationInputRef.current.focus();
  };

  return (
    <div className="dark:bg-black dark:text-white ">
      <Navigation
        transferFocus={transferFocus}
        setIsDark={setIsDark}
        isDark={isDark}
      />
      <img
        className="w-full h-[30rem] object-cover"
        src="https://hopin.com/quiin/events/pictures/000/361/524/large/Untitled_design-2.png?1655831773"
        alt="banner"
      />
      <div>
        <article className="container m-auto md:flex md:flex-col">
          <EventDetails
          />
          <Registration
            registrationInputRef={registrationInputRef}
          />
        </article>
      </div>
    </div>
  );
};

export default Home;
