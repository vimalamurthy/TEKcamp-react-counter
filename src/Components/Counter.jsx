import React, { useState } from 'react';
import Display from './Display';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementOne = () => {
    setCount(count + 1);
  };

  const incrementTwo = () => {
    setCount(count + 2);
  };

  const incrementFive = () => {
    setCount(count + 5);
  };

  const decrementOne = () => {
    setCount(count - 1);
  };

  const decrementTwo = () => {
    setCount(count - 2);
  };

  const decrementFive = () => {
    setCount(count - 5);
  };

  const reset = () => {
    setCount(count * 0);
  };

  return (
    <div className='counter'>
      <Display count={count} />
      <h1>
        <button
          style={{ backgroundColor: 'yellow', margin: 10 }}
          onClick={incrementOne}
        >
          Increment
        </button>
        <button
          style={{ backgroundColor: 'yellow', margin: 10 }}
          onClick={decrementOne}
        >
          Decrement
        </button>
        <button style={{ backgroundColor: 'grey', margin: 10 }} onClick={reset}>
          Reset
        </button>
      </h1>
      <h1>
        <button
          style={{ backgroundColor: 'green', margin: 10, fontSize: 20 }}
          onClick={incrementTwo}
        >
          Increment(+2)
        </button>
        <button
          style={{ backgroundColor: 'green', margin: 10, fontSize: 20 }}
          onClick={decrementTwo}
        >
          Decrement(-2)
        </button>
      </h1>
      <h1>
        <button
          style={{ backgroundColor: 'red', margin: 10, fontSize: 20 }}
          onClick={incrementFive}
        >
          Increment(+5)
        </button>
        <button
          style={{ backgroundColor: 'red', margin: 10, fontSize: 20 }}
          onClick={decrementFive}
        >
          Decrement(-5)
        </button>
      </h1>
    </div>
  );
};

export default Counter;
