import React from 'react';

const Footer = () => {
    return(
      <div className="footer">
        <div className="message">
            <p>Get in touch with me</p>
        </div>
        <div className="mail">
            <a href="mailto: slavikiftodii5@gmail.com">slavikiftodii5@gmail.com</a> 
        </div>
        <div className="name">
            <p>SLAVIK</p>
        </div>
        <div className="social">
            <div className="social-media">
                <ul>
                    <li><a href="https://www.linkedin.com/in/slavikiftodii/">Linkedin</a></li>
                    <li><a href="https://github.com/slavikiftodii">Github</a></li>
                </ul>
            </div>
            <div className="phone-number">
                <ul>
                    <li><a href="tel:+34 642 23 92 16">+34 642 23 92 16</a></li>
                </ul>
            </div>
        </div>
      </div>
    )

}

export default Footer;