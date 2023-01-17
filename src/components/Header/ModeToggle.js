import React, { useState } from 'react';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <AiFillSun size='2rem'/> : <AiFillMoon size='2rem'/>}
    </button>
  );
};

export default ModeToggle;
