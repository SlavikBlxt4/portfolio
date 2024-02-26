import React from 'react';
import linkedinDark from '../img/DarkMode/linkedin.png';
import githubDark from '../img/DarkMode/github.png';
import whatsappDark from '../img/DarkMode/whatsapp.png';
import linkedinLight from '../img/LightMode/linkedindark.png';
import githubLight from '../img/LightMode/githubdark.png';
import whatsappLight from '../img/LightMode/whatsappdark.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation("global");
    return(
      <div className="footer">
        <div className="message">
        <p>{t("footer.message")}</p>
        </div>

        <div className="flex-container">
            <div className="mail">
                <a href="mailto: slavikiftodii5@gmail.com">slavikiftodii5@gmail.com</a> 
            </div>
            <div className="social">
                <div className="social-media-dark">
                
                    
                    

                    <a href="https://www.linkedin.com/in/viacheslav-iftodii/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLight} alt="LinkedIn"/> 
                    </a>
                        
                    
                  
                    <a href="https://github.com/SlavikBlxt4" target="_blank" rel="noopener noreferrer">
                        <img src={githubLight} alt="GitHub"/>
                    </a>
                  
                    <a href="https://wa.me/+34642239216" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappLight} alt="WhatsApp"/>
                    </a>
                        
                
                </div>
                <div className="social-media-light">
                
                    
                    <a href="https://www.linkedin.com/in/viacheslav-iftodii/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinDark} alt="LinkedIn"/> 
                    </a>

                    <a href="https://www.linkedin.com/in/viacheslav-iftodii/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLight} alt="LinkedIn"/> 
                    </a>
                        
                    
                    <a href="https://github.com/SlavikBlxt4" target="_blank" rel="noopener noreferrer">
                        <img src={githubDark} alt="GitHub"/>
                    </a>
                    <a href="https://github.com/SlavikBlxt4" target="_blank" rel="noopener noreferrer">
                        <img src={githubLight} alt="GitHub"/>
                    </a>
                        
                    
                    <a href="https://wa.me/+34642239216" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappDark} alt="WhatsApp"/>
                    </a>
                    <a href="https://wa.me/+34642239216" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappLight} alt="WhatsApp"/>
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