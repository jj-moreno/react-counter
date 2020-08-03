import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';

function Counter() {
  const [count, setCount] = useState(0);
  const handleReset = () => setCount(0);
  const changeCount = (delta) => setCount(count + delta);

  return (
    <div
      className='counter'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 'calc(16px + 6vmin)',
        paddingTop: '5px',
      }}
    >
      <Display count={count} />
      <ButtonPad reset={handleReset} count={count} changeCount={changeCount} />
    </div>
  );
}

export default Counter;
