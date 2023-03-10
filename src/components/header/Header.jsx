import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Marco Nocentini</h1>
        <h5 className="text-light"> FrontEnd Developer </h5> <HeaderSocials />
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
