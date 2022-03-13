import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://whatsapp.com " target="_blank" rel="noopener noreferrer">
        <BsWhatsapp />
      </a>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <FiFacebook />
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <GrInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
