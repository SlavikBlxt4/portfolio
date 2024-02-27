import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Start = () => {
  const { t, i18n } = useTranslation("global");
  const [text, setText] = useState('');
  const fullText = t("start.message"); // Replace with your desired text
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setText(fullText.substring(0, charIndex));
        charIndex++;
        setShowButton(false); // Hide the button while typewriting
      } else {
        clearInterval(interval);
        setShowButton(true); // Show the button after typewriting effect
      }
    }, 75); // Adjust the interval for typing speed
    return () => clearInterval(interval);
  }, [fullText]);


  return (
    <div className="start"> {/* Apply the 'start' class to the div */}
      <h1>
        {text}
        <span className="typing-cursor"></span> {/* Apply the 'typing-cursor' class to the span */}
      </h1>
      <Link to="/home">
        <button className={showButton ? "discover-button show" : "discover-button"}>{t("start.button")}</button>
      </Link>
    </div>
  );
};

export default Start;