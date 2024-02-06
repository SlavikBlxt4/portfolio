import React from 'react';

const Footer = () => {
    return(
      <div className="footer">
        <div className="message">
            <p>Get in Touch With Me</p>
        </div>
        <div className="mail">
            <a href="mailto: slavikiftodii@gmail.com">slavikiftodii@gmail.com</a> 
        </div>
        <div className="flex-container">
            <div className="name-footer">
                <p>SLAVIK</p>
            </div>
            <div className="social">
                <div className="phone-number">
                        <ul>
                            <li><a href="tel:+34 642 23 92 16">+34 642 23 92 16</a></li>
                        </ul>
                    </div>
                <div className="social-media">
                    <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/viacheslav-iftodii/" target="_blank" rel="noopener noreferrer">
                            <img src="./img/" alt="LinkedIn" />
                          </a>
                        </li>
                        <li><a href="https://github.com/SlavikBlxt4" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="https://instagram.com/slaaviik_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://wa.me/+34642239216" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                    </ul>
                </div>
            </div>
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