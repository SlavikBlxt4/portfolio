import React, { useEffect } from "react"
import Curriculum from '../componentes/cv.pdf';
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


function Main() {
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
          <h2>About me</h2>
          <p className="pc-version">I am a student in a Higher Degree in Multiplatform Application Development at the San Valero Center. My passion for knowing how systems work inside has led me to develop a certain curiosity in the world of programming, and above all, in cybersecurity. However, I also enjoy programming applications or web pages, among other things. Above all, I love challenges, I feel the need to improve a little every day in every way, including the knowledge and learning of all technologies. In short, my goal is to be better than yesterday.</p>
          <p className="mobile-version">
          As a student at San Valero Center, I'm passionate about understanding system functionality, programming, and cybersecurity. I love challenges and aim for continuous improvement in all aspects of technology, striving to be better each day.
          </p>
          <div className="button-container">
          <Link to="/aboutme"><button className="aboutme-button">Find out more about me</button></Link>
            <a href={Curriculum} download="cv.pdf"  target="_blank" rel="noreferrer"><button className="cv-button">Download my CV</button></a>
          </div>
        </div>
        <div className="image">
          <img src={FotoPerfil}/>
        </div>
      </div>
      <div className="skills">
        <h2>My Tech Stack</h2>
        <div className="code-languages">
          <ul className="code-title">
            <li><div className="title-logo"><p>Java</p><img src={Java} className="code-logo"></img></div>
              <ul className="code-desc">
                <li>Leveraging Java's versatility, I specialize in crafting robust server-side solutions that ensure optimal functionality and user experiences.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>HTML</p><img src={HTML} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>As a Full-Stack developer, I am able to create web structures that ensure your website is well structured and easily readable.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>CSS</p><img src={CSS} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>I specialize in creating beautiful, intuitive styles that make your website or application stand out.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>React.js</p><img src={ReactLogo} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>With my expertise in React.js, I create dynamic and responsive user interfaces that improve user engagement and provide seamless experiences across all platforms.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>TypeScript</p><img src={TypeScript} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>As an experienced back-end developer, I provide web development services that encompass architecting and implementing robust server-side solutions.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>JavaScript</p><img src={JavaScript} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>As a skilled back-end developer, my proficiency extends to JavaScript, enabling me to create dynamic and responsive web applications.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>Bash</p><img src={Bash} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>My proficiency in Bash extends to creating efficient scripts for deployment, system maintenance, and task automation.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>Git</p><img src={Git} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>My command of Git allows me to efficiently manage and track changes across the codebase, ensuring smooth collaboration and version control in development projects.</li>
              </ul>
            </li>
            <li><div className="title-logo"><p>Amazon Web Services</p><img src={AWS} className="code-logo"></img></div>
            <ul className="code-desc">
                <li>I adeptly navigate the AWS ecosystem to optimize web application deployment and scalability, architecting robust and secure cloud solutions.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      );
}


export default Main;