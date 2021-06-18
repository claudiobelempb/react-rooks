import { useState, useEffect, useRef } from 'react';
const useMyHook = (callback, delay = 1000) => {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCallback.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

const CreateHooks = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div className={'App'}>
      <h1>Counter: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => setDelay((d) => d + increment)}>+ {increment}</button>
      <button onClick={() => setDelay((d) => d - increment)}>- {increment}</button>
      <input type={'number'} value={increment} onChange={(e) => setIncrement(Number(e.target.value))} />
    </div>
  );
};

export { CreateHooks };
