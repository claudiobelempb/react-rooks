//import P from 'prop-types';
import { StateContextProvide } from './contexts/stateContext';
import { Div } from './components/Div';
import './App.css';

const UseContext = () => {
  return (
    <StateContextProvide>
      <Div />
    </StateContextProvide>
  );
};

export { UseContext };
