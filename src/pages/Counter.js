import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });

  useEffect(() => {
    if (prevCount === 0 && count === 1) {
      console.log('Form Submitted');
    }
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>
        Now:
        {count}
        , before:
        {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default Counter;
