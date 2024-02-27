import React from "react";
import portfolioImage from '../img/projects/portfolio.png';
import horchImage from '../img/projects/horch.png';
import { useTranslation } from "react-i18next";

export default function ProjectDetail() {
    const { t, i18n } = useTranslation("global");
    return (
        <div>
            <div className="text-project">
            <div className="project-detail">
                <h1>{t("projectdetail.Title")}</h1>
            </div>
            <div className="submessage-project">
                <p>{t("projectdetail.submessage")}</p>
            </div>
            </div>
            <div className="line-separator">
                <hr/>
            </div>
            <div className="project-portfolio">
            <a href="https://github.com/SlavikBlxt4/portfolio" target="_blank" rel="noopener noreferrer"><img src={portfolioImage} alt="project"/></a>
                <div className="project-portfolio-text">
                    <h1>{t("projectdetail.title-project-portfolio")}</h1>
                    <div className="description-portfolio">
                    <p>{t("projectdetail.description-portfolio")}</p>
                    <h2 id="tech-stack">Tech Stack</h2>
                    <ul>
                        <li>React</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3 id="react-">React ⚛️</h3>
                    <p>{t("projectdetail.react-desc")}</p>
                    <ul>
                        <li dangerouslySetInnerHTML={{ __html: t("projectdetail.react-features-portfolio.1") }}></li>
                        <br></br>
                        <li dangerouslySetInnerHTML={{ __html: t("projectdetail.react-features-portfolio.2") }}></li>
                        <br></br>
                        <li dangerouslySetInnerHTML={{ __html: t("projectdetail.react-features-portfolio.3") }}></li>
                        <br></br>
                        <li dangerouslySetInnerHTML={{ __html: t("projectdetail.react-features-portfolio.4") }}></li>
                        <br></br>
                        <li dangerouslySetInnerHTML={{ __html: t("projectdetail.react-features-portfolio.5") }}></li>
                    </ul>
                    <h2 id="features">{t("projectdetail.common-subtitles.features")}</h2>
                    <ul>
                        <li>{t("projectdetail.features-portfolio.1")}</li>
                        <br></br>
                        <li>{t("projectdetail.features-portfolio.2")}</li>
                        <br></br>
                        <li>{t("projectdetail.features-portfolio.3")}</li>
                        <br></br>
                        <li>{t("projectdetail.features-portfolio.4")}</li>
                        <br></br>
                        <li>{t("projectdetail.features-portfolio.5")}</li>
                    </ul>
                    <h2 id="process">{t("projectdetail.common-subtitles.process")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("projectdetail.process-portfolio") }}></p>
                    <h2 id="conclusions-and-learnings">{t("projectdetail.common-subtitles.conclusions")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("projectdetail.process-portfolio") }}></p>
                    </div>
                    <div className="line-separator">
                        <hr/>
                    </div>
                </div>
            <a href="https://github.com/SlavikBlxt4/horchproject" target="_blank" rel="noopener noreferrer"><img src={horchImage} alt="project"/></a>
                <div className="project-portfolio-text">
                    <h1>Horch Motorsport</h1>
                    <div className="description-portfolio">
                    <p>{t("projectdetail.description-horch")}</p>
                    <h2 id="tech-stack">Tech Stack</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    
                    <h2 id="features">{t("projectdetail.common-subtitles.features")}</h2>
                    <ul>
                        <li>{t("projectdetail.features-horch.1")}</li>
                        <br></br>
                        <li>{t("projectdetail.features-horch.2")}</li>
                        <br></br>
                        <li>{t("projectdetail.features-horch.3")}</li>
                    </ul>
                    <h2 id="process">{t("projectdetail.common-subtitles.process")}</h2>
                    <p>{t("projectdetail.process-horch")}</p>
                    <h2 id="conclusions-and-learnings">{t("projectdetail.common-subtitles.conclusions")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("projectdetail.conclusions-horch") }}></p>
                    </div>
                    <div className="line-separator">
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}
