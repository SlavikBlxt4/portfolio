import React from "react"
import Curriculum from '../componentes/cv.pdf';
import FotoPerfil from '../componentes/foto_lkdin.png'

const Main = () => {
    return (
        <div>
          <div className="flex-container-main">
            <div className="content">
              <h2>About me</h2>
              <p className="pc-version">I am a student in a Higher Degree in Multiplatform Application Development at the San Valero Center. My passion for knowing how systems work inside has led me to develop a certain curiosity in the world of programming, and above all, in cybersecurity. However, I also enjoy programming applications or web pages, among other things. Above all, I love challenges, I feel the need to improve a little every day in every way, including the knowledge and learning of all technologies. In short, my goal is to be better than yesterday.</p>
              <p className="mobile-version">
              As a student at San Valero Center, I'm passionate about understanding system functionality, programming, and cybersecurity. I love challenges and aim for continuous improvement in all aspects of technology, striving to be better each day.
              </p>
              <div className="button-container">
                <button className="aboutme-button">Find out more about me</button>
                <a href={Curriculum} download="cv.pdf"  target="_blank"><button className="cv-button">Download my CV</button></a>
              </div>
            </div>
            <div className="image">
              <img src={FotoPerfil}/>
            </div>
          </div>
          <div className="skills">
            <h2>My Skills</h2>
            <div className="code-languages">
              <ul className="code-title">
                <li>Java
                  <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>HTML
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>CSS
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>React.js
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>TypeScript
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>JavaScript
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>Bash
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>Git
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>AWS
                <ul className="code-desc">
                    <li>Spring Boot</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Main;