import React from "react"

const Main = () => {
    return (
        <div>
          <div className="content">
            <h2>About me</h2>
            <p>I am a Full-Stack developer, based on Spain. I focus on the design and development of websites for companies and brands. My portfolio shows my wide range of projects, which cover both applications and websites.</p>
            <div className="button-container">
              <button className="aboutme-button">Find out more about me</button>
              <button className="cv-button">Download my CV</button>
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