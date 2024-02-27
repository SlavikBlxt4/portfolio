import React from 'react';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import whatsapp from '../img/whatsapp.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation("global");
    return(
      <div className="footer">
        <div className="message">
            <p>{t("contact.title")}</p>
        </div>

        <div className="flex-container">
            <div className="mail">
                <a href="mailto: slavikiftodii5@gmail.com">slavikiftodii5@gmail.com</a> 
            </div>
            <div className="social">
                <div className="social-media">
                
                    
                    <a href="https://www.linkedin.com/in/viacheslav-iftodii/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn"/> 
                    </a>
                        
                    
                    <a href="https://github.com/SlavikBlxt4" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub"/>
                    </a>
                        
                    
             
                        
                    
                    <a href="https://wa.me/+34642239216" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp"/>
                    </a>
                        
                
                </div>
            </div>
        </div>
        <div className="line-separator">
            <hr/>
        </div>
            <div className="copyright">
                <p>© 2024 SLAVIK. All rights reserved</p>
            </div>
        </div>
    )

}

export default Footer;