import P from 'prop-types';
import { useReducer } from 'react';
import { ContextCounter } from './ContextCounter';
import { ReducerCounter } from './ReducerCounter';
import { DataCounter } from './DataCounter';

const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(ReducerCounter, DataCounter);

  return <ContextCounter.Provider value={{ counterState, counterDispatch }}>{children}</ContextCounter.Provider>;
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};

export { CounterProvider };
