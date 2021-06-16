import { useReducer } from 'react';

const globalState = {
  title: '0 título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const fnReducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda', action.playload);
      return { ...state, title: action.playload };
    }
    case 'inverter': {
      console.log('chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
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
        {title} {counter}{' '}
      </h1>
      <p>{body}</p>
      <button onClick={() => dispatch({ type: 'muda', playload: new Date().toLocaleDateString('pt-BR') })}>
        mudou
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
    </div>
  );
};

export { UseReducer };
