import React, { useState } from 'react';

export default function ButtonPad(props) {
  const [counterHistNum, setCounterHistNum] = useState(1);

  const handleChangeCount = (event) => {
    const btnValue = event.target.value;
    props.changeCount(parseInt(btnValue));
  };

  const handleReset = () => {
    setCounterHistNum(counterHistNum + 1);
    document.body
      .querySelector('#counter-hist')
      .insertAdjacentHTML(
        'beforeend',
        `<li>Counter #${counterHistNum} = ${props.count}</li>`
      );
    props.changeCount(-props.count);
  };

  return (
    <div className='button-pad' style={{ fontSize: '32px' }}>
      <button onClick={handleChangeCount} value='10'>
        + 10
      </button>
      <button onClick={handleChangeCount} value='5'>
        + 5
      </button>
      <button onClick={handleChangeCount} value='2'>
        + 2
      </button>
      <button onClick={handleChangeCount} value='1'>
        + 1
      </button>
      <button onClick={handleReset} value='0'>
        Reset
      </button>
      <button onClick={handleChangeCount} value='-1'>
        - 1
      </button>
      <button onClick={handleChangeCount} value='-2'>
        - 2
      </button>
      <button onClick={handleChangeCount} value='-5'>
        - 5
      </button>
      <button onClick={handleChangeCount} value='-10'>
        - 10
      </button>
      <div id='counter-hist'>
        <ul>Counter History: </ul>
      </div>
    </div>
  );
}
