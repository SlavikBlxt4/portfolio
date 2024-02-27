import React from 'react';
import { Link } from 'react-router-dom';
import MenuDesplegable from '../img/menu-desplegable.png';
import { useTranslation } from "react-i18next";
import ToggleSwitch from "./toggleSwitch";

const Header = () => {
  const { t, i18n } = useTranslation("global");

    return(
      <div className="header">
        <div className="name"><a href="/"><h1>&lt;SLAVIK /&gt;</h1></a></div>
        <div className="languages">
          <ToggleSwitch />
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li><Link to="/home">{t("header.home")}</Link></li>
        <li><Link to="/projects">{t("header.myworks")}</Link></li>
        <li><Link to="/contact" id="contact-link">{t("header.contact")}</Link></li>
          </ul>
          <div className="menu-button">
            <button><img src={MenuDesplegable} alt='menu'></img></button>
          </div>
        </div>        
      </div>
    )
}

export default Header;