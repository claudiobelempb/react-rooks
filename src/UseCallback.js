import React, { useState, useCallback } from 'react';
import P from 'prop-types';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho');
  return (
    <button type={'button'} onClick={() => incrementButton(100)}>
      +
    </button>
  );
});

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai');
  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>C1: {counter}</h1>
        <Button incrementButton={incrementCounter} />
      </header>
    </div>
  );
};

Button.propTypes = {
  incrementButton: P.func,
};

export { UseCallback };
