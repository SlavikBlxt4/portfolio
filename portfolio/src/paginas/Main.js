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
            <p>My Skills</p>
            <ul>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Git</li>
            </ul>
            <p>Tools</p>
            <ul>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
              <li>Postman</li>
              <li>Figma</li>
              <li>GitHub</li>
            </ul>
            <p>Languages</p>
            <ul>
              <li>English</li>
              <li>Spanish</li>
            </ul>

          </div>
        </div>
      );
}

export default Main;