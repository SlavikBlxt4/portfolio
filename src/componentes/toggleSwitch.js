//Toggle switch en React
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
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