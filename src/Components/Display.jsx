import React, { useState, useEffect } from 'react';

function Display(props) {
  const [displayColor, setDisplayColor] = useState('#000000');

  function toggleColor() {
    displayColor === '#000000'
      ? setDisplayColor('#61dafb')
      : setDisplayColor('#000000');
  }

  useEffect(() => {
    return () => toggleColor();
  });

  return (
    <section
      className='display'
      style={{
        fontSize: '64px',
        color: displayColor,
        transition: 'color 0.5s ease',
      }}
    >
      {props.count}
    </section>
  );
}

export default Display;
