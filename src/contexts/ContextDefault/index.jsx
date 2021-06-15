import { createContext, useState } from 'react';
import { data } from './data';

const ContextDefault = createContext();

// eslint-disable-next-line react/prop-types
const ContextDefaultProvide = ({ children }) => {
  const [stateProvide, setStateProvide] = useState(data);

  return <ContextDefault.Provider value={{ stateProvide, setStateProvide }}>{children}</ContextDefault.Provider>;
};

export { ContextDefaultProvide, ContextDefault };
