import React from "react";
import "./Experience.css";
import { FaPaintBrush } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";
import { RiArtboardFill } from "react-icons/ri";
import { BsFillCameraFill } from "react-icons/bs";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaPaintBrush className="experience__details-icon" />
              <div>
                <h4>Painting & Drawing</h4>
                <small className="text-light">9.3</small>
              </div>
            </article>

            <article className="experience__details">
              <MdDesignServices className="experience__details-icon" />
              <div>
                <h4>illustration</h4>
                <small className="text-light">9.0</small>
              </div>
            </article>

            <article className="experience__details">
              <RiPaintFill className="experience__details-icon" />
              <div>
                <h4>Digital Paint</h4>
                <small className="text-light">8.6</small>
              </div>
            </article>

            <article className="experience__details">
              <RiArtboardFill className="experience__details-icon" />
              <div>
                <h4>Storyboard</h4>
                <small className="text-light">7.3</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCameraFill className="experience__details-icon" />
              <div>
                <h4>Photography</h4>
                <small className="text-light">7.3</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCameraReelsFill className="experience__details-icon" />
              <div>
                <h4>Videography</h4>
                <small className="text-light">6.3</small>
              </div>
            </article>
          </div>
        </div>

        {/*  END OF FRONTEND */}

        <div className="experience__backend">
          <h3>ADOBE</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiAdobepremierepro className="experience__details-icon" />
              <div>
                <h4>Premiere Pro</h4>
                <small className="text-light">5.6</small>
              </div>
            </article>

            <article className="experience__details">
              <SiAdobephotoshop className="experience__details-icon" />
              <div>
                <h4>Photoshop</h4>
                <small className="text-light">8.3</small>
              </div>
            </article>

            <article className="experience__details">
              <SiAdobeillustrator className="experience__details-icon" />
              <div>
                <h4>illustrator</h4>
                <small className="text-light">7.6</small>
              </div>
            </article>

            <article className="experience__details">
              <SiAdobeaftereffects className="experience__details-icon" />
              <div>
                <h4>After Effect</h4>
                <small className="text-light">5.7</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
