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
            <div className="skill">HTML</div>
            <div className="skill">Website design and development</div>
            <div className="skill">JavaScript</div>
            <div className="skill">Python</div>
            <div className="skill">CSS</div>
            <div className="skill">Java</div>
          </div>
        </div>
      );
}

export default Main;