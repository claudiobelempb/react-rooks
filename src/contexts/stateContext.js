import { createContext, useState } from 'react';

const valueContext = {
  title: 'title article',
  body: 'body article',
  counter: 0,
};

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
const StateContextProvide = ({ children }) => {
  const [stateProvide, setStateProvide] = useState(valueContext);
  return <StateContext.Provider value={{ stateProvide, setStateProvide }}>{children}</StateContext.Provider>;
};

export { StateContextProvide, StateContext };
