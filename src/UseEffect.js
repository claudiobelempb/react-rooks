import { useState, useEffect } from 'react';
import './App.css';

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const eventFn = () => {
    console.log('h1 click');
  };

  /*ComponentDirUpdate - executa toda vez que o component e atualizado */
  /*
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });
  /*

  /*ComponentDidMount - executa apenas 1 vezes o component */
  /*useEffect(() => {
    console.log('ComponentDidMount');
  }, []);
  */

  useEffect(() => {
    const h1El = document.querySelector('h1');
    h1El?.addEventListener('click', eventFn);

    /*componentDidUmount - limpeza */
    return () => {
      h1El?.removeEventListener('click', eventFn);
    };
  }, []);

  /*Com dependência - executa toda vez que a dependência mudar*/
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <p>Test 2</p>
        <h1>
          C1: {counter} C2: {counter2}
        </h1>

        <button type={'button'} onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button type={'button'} onClick={() => setCounter2(counter2 + 1)}>
          +
        </button>
      </header>
    </div>
  );
};

export { UseEffect };
