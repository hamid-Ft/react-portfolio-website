import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => (
  <>
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Ehsan pic" />
          </div>
        </div>

        <div className="about__content"></div>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>10+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>10+ clients local</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Experience</h5>
            <small>100+ completed projects</small>
          </article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            magnam corrupti nihil aperiam, eaque repellendus ullam non.
            Repellendus voluptates animi ratione nemo vel beatae vero laudantium
            mollitia, ipsa dolorem ipsam.
          </p>

          <a href="contact" className="btn btn-primary"></a>
        </div>
      </div>
    </section>
  </>
);

export default About;
