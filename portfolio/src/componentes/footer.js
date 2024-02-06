import React from 'react';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import instagram from '../img/instagram.png';
import whatsapp from '../img/whatsapp.png';

const Footer = () => {
    return(
      <div className="footer">
        <div className="message">
            <p>Get in Touch With Me</p>
        </div>

        <div className="flex-container">
            <div className="mail">
                <a href="mailto: slavikiftodii@gmail.com">slavikiftodii@gmail.com</a> 
            </div>
            <div className="social">
                <div className="social-media">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/viacheslav-iftodii/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn"/> 
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SlavikBlxt4" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/slaaviik_" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+34642239216" target="_blank" rel="noopener noreferrer">
                                <img src={whatsapp} alt="WhatsApp"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="line-separator">
            <hr/>
        </div>
            <div className="copyright">
                <ul>
                    <li><p>© 2024 SLAVIK. All rights reserved</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Footer;