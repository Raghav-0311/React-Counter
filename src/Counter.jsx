import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
  return (
    <>
      <h1 className='counter'>{count}</h1>
      <div className="btn-container">
        <button className="btn" type='button' onClick={handleDecrement}>
            Decrement Count
        </button>
        <button className="btn" type='button' onClick={handleIncrement}>
            Increment Count
        </button>
      </div>

    </>
  )
}

export default Counter
