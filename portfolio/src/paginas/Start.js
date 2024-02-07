import React, { useState } from 'react';
import Main from './Main';

const Start = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleButtonClick = () => {
    setShowMainPage(true);
  };

  return (
    <div>
      {showMainPage ? (
        <Main />
      ) : (
        <div className='start'>
          <h1>Website design and development for your brand</h1>
          <button onClick={handleButtonClick}>Discover more →</button>
        </div>
      )}
    </div>
  );
};

export default Start;