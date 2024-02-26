//Toggle switch en React
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


const ToggleSwitch = () => {
  const [isToggled, setToggled] = useState(false);
  const { i18n } = useTranslation();

  const handleToggle = () => {
    setToggled(!isToggled);
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input type='checkbox' checked={isToggled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
  <span className="toggle-label">{isToggled ? '🇺🇸' : '🇪🇸'}</span>
    </div>
  );
};

export default ToggleSwitch;