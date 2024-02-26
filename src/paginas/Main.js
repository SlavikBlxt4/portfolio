import React, { useEffect } from "react"
import Curriculum from '../componentes/curriculum.pdf';
import FotoPerfil from '../componentes/foto_lkdin.png'
import AWS from "../skills-logos/aws.png"
import Bash from "../skills-logos/bash_v2.png"
import CSS from "../skills-logos/css.png"
import Git from "../skills-logos/git.png"
import HTML from "../skills-logos/html.png"
import Java from "../skills-logos/java.png"
import JavaScript from "../skills-logos/javascript.png"
import ReactLogo from "../skills-logos/react.png"
import TypeScript from "../skills-logos/typescript.png"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Main() {
  const { t, i18n } = useTranslation("global");
  useEffect(() => {
    const titleElements = document.querySelectorAll('.code-title');
    const observers = [];

    titleElements.forEach(title => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, { threshold: 0.3 });

      const listItems = title.querySelectorAll('li');
      listItems.forEach(item => {
        observer.observe(item);
      });

      observers.push(observer);
    });

    return () => {
      // Clean up the observers when the component unmounts
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  }, []); 

    return (
      <div>
      <div className="flex-container-main">
        <div className="content">
          <h2>{t("home.aboutme")}</h2>
          <p className="pc-version">{t("home.description-pc")}</p>
          <p className="mobile-version">
            {t("home.description-mobile")}
          </p>
          <div className="button-container">
            <Link to="/aboutme"><button className="aboutme-button">{t("home.aboutme-button")}</button></Link>
            <a href={Curriculum} download="cv.pdf"  target="_blank" rel="noreferrer"><button className="cv-button">{t("home.cv-button")}</button></a>
          </div>
        </div>
        <div className="image">
          <img src={FotoPerfil} alt=" "/> 
          
        </div>
      </div>
      <div className="skills">
    <h2>{t("home.mytechstack")}</h2>
        <div className="code-languages">
          <ul className="code-title">
            <li><div className="title-logo"><p>Java</p><img src={Java} className="code-logo" alt=" "></img></div>
              <ul className="code-desc">
            <li>{t("home.java-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>HTML</p><img src={HTML} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.html-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>CSS</p><img src={CSS} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.css-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>React.js</p><img src={ReactLogo} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.react-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>TypeScript</p><img src={TypeScript} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.typescript-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>JavaScript</p><img src={JavaScript} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.javascript-desc")}.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>Bash</p><img src={Bash} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.bash-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>Git</p><img src={Git} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.git-desc")}</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>AWS</p><img src={AWS} className="code-logo" alt=" "></img></div>
            <ul className="code-desc">
                <li>{t("home.aws-desc")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      );
}


export default Main;