import React, { useState, useCallback, useMemo } from 'react';
import P from 'prop-types';
import './App.css';

const Button = ({ incrementButton }) => {
  console.log('Filho');
  return (
    <button type={'button'} onClick={() => incrementButton(100)}>
      +
    </button>
  );
};

const UseMemo = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  console.log('Pai');
  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>C1: {counter}</h1>
        {btn}
      </header>
    </div>
  );
};

Button.propTypes = {
  incrementButton: P.func,
};

export { UseMemo };
