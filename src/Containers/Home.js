import React from "react";
import { useState } from "react";
import logo_cloudinary from "https://res.cloudinary.com/quentin/image/upload/v1617119221/Website/cloudinary_logo_wym8js.svg";
import logo_react from "https://res.cloudinary.com/quentin/image/upload/v1617119229/Website/reactjs-icon_lv8n91.svg";
import logo_mongo from "https://res.cloudinary.com/quentin/image/upload/v1617119229/Website/MongoDB-Logo_u4yswl.svg";
import logo_HTML from "https://res.cloudinary.com/quentin/image/upload/v1617119221/Website/HTML-logo_o7k2nf.svg";
import logo_CSS from "https://res.cloudinary.com/quentin/image/upload/v1617119221/Website/CSS-logo_evxei2.svg";
import logo_Node from "https://res.cloudinary.com/quentin/image/upload/v1617119227/Website/Node-logo_xsv81r.svg";
import logo_LinkedIn from "https://res.cloudinary.com/quentin/image/upload/v1617119224/Website/LinkedIn-Logo_ms5ic6.svg";
import logo_Github from "https://res.cloudinary.com/quentin/image/upload/v1617119222/Website/Github-logo_kawham.png";
import logo_Vinted from "https://res.cloudinary.com/quentin/image/upload/v1617119233/Website/Vinted_logo_jgehgu.png";
import logo_Marvel from "https://res.cloudinary.com/quentin/image/upload/v1617119229/Website/Marvel-Comics-Logo_red9dz.png";
import { FaFilePdf, FaEnvelope } from "react-icons/fa";
import CV from "../Assets/CV/CV_dev_Quentin_Pineau.pdf";

const Home = () => {
  const [Who, SetWho] = useState(true);
  const [Stacks, SetStacks] = useState(true);
  const [Projects, SetProjects] = useState(true);
  const [Contact, SetContact] = useState(true);

  return (
    <div className="Home-container">
      <div className="Menu">
        <div
          className={Who ? "Unclicked" : "Clicked"}
          onClick={() => {
            SetContact(true);
            SetProjects(true);
            SetStacks(true);
            SetWho(!Who);
          }}
        >
          Who am I?
        </div>
        <div
          className={Stacks ? "Unclicked" : "Clicked"}
          onClick={() => {
            SetContact(true);
            SetProjects(true);
            SetWho(true);
            SetStacks(!Stacks);
          }}
        >
          Stacks
        </div>
        <div
          className={Projects ? "Unclicked" : "Clicked"}
          onClick={() => {
            SetContact(true);
            SetStacks(true);
            SetWho(true);
            SetProjects(!Projects);
          }}
        >
          Projects
        </div>
        <div
          className={Contact ? "Unclicked" : "Clicked"}
          onClick={() => {
            SetProjects(true);
            SetStacks(true);
            SetWho(true);
            SetContact(!Contact);
          }}
        >
          Contact me
        </div>
      </div>
      <div className="Content">
        <div className={Who ? "Who-hidden" : "Who-show"}>
          <div className="Who-show-text">
            <p>
              &emsp; " Born in France, raised in Senegal, I have spent the last
              10 years working as a salesman, restaurant owner and bartender. I
              have been into computer and coding as a curiosity for a long time
              and I finally decided to step forward and complete a bootcamp in
              React/React Native at
              <a className="Reacteur" href="https://www.lereacteur.io/">
                Le Reacteur
              </a>
              at the end of 2020.
            </p>
            <p>
              &emsp; I am currently looking for a first job or freelance
              missions in order to perfect my coding skills "
            </p>
          </div>
        </div>
        <div className={Stacks ? "Stacks-hidden" : "Stacks-show"}>
          <div className="Stacks-show-text">
            <img className="cloudinary" src={logo_HTML} alt="" />
            <img className="cloudinary" src={logo_CSS} alt="" />
            <img className="cloudinary" src={logo_Node} alt="" />
            <img className="cloudinary" src={logo_cloudinary} alt="" />
            <img className="cloudinary" src={logo_react} alt="" />
            <img className="cloudinary" src={logo_mongo} alt="" />
          </div>
        </div>
        <div className={Projects ? "Projects-hidden" : "Projects-show"}>
          <div className="Projects-show-text">
            <div className="Project-show-icons">
              <a href="https://infallible-wozniak-46561b.netlify.app/">
                <img className="Vinted" src={logo_Vinted} alt="" />
              </a>
              <a href="https://cocky-montalcini-1130b0.netlify.app/">
                <img className="Marvel" src={logo_Marvel} alt="" />
              </a>
            </div>
            <div>
              <p>
                I have other projects that I can show you in private including a
                mobile App made from scratch
              </p>
            </div>
          </div>
        </div>
        <div className={Contact ? "Contact-hidden" : "Contact-show"}>
          <div className="Contact-text">
            <div className="Contact-items">
              <div className="Contact-items-text">LinkedIn</div>
              <div className="Contact-items-icons">
                <a href="https://www.linkedin.com/in/quentin-pineau-a23924114/">
                  <img className="Linkedin" src={logo_LinkedIn} alt="" />
                </a>
              </div>
            </div>
            <div className="Contact-items">
              <div className="Contact-items-text">Github</div>
              <div className="Contact-items-icons">
                <a href="https://github.com/Qpineau">
                  <img className="Github" src={logo_Github} alt="" />
                </a>
              </div>
            </div>
            <div className="Contact-items">
              <div className="Contact-items-text">Download my CV</div>
              <div className="Contact-items-icons">
                <a href={CV} className="Contact-CV" download>
                  <FaFilePdf className="Icon" />
                </a>
              </div>
            </div>
            <div className="Contact-items">
              <div className="Contact-items-text">Send me an e-mail</div>
              <div className="Contact-items-icons">
                <a
                  href="mailto:quentin.pineau@gmail.com"
                  className="Contact-Mail"
                >
                  <FaEnvelope className="Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
