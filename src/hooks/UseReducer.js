import { useReducer } from 'react';

const globalState = {
  title: '0 título do contexto 2',
  body: 'O body do contexto',
  counter: 0,
};

const fnReducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      const { counter } = state;
      console.log('chamou muda', action.playload, counter);
      return { ...state, title: action.playload, counter: counter + 1 };
    }
    case 'inverter': {
      console.log('chamou inverter');
      const { title, counter } = state;

      return { ...state, title: title.split('').reverse().join(''), counter: counter - 1 };
    }
  }
  return { ...state };
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(fnReducer, globalState);
  const { counter, title, body } = state;

  return (
    <div className={'App'}>
      <h1>
        {' '}
        {title} Contador: {counter}{' '}
      </h1>
      <p>{body}</p>
      <button onClick={() => dispatch({ type: 'muda', playload: new Date().toLocaleDateString('pt-BR') })}>+</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>-</button>
    </div>
  );
};

export { UseReducer };
