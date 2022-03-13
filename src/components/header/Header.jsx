import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ehsan Shariffar</h1>
      <h5 className="text-light">Designer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="Ehsan Shariffar" className="me__header" />
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);

export default Header;
