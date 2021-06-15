//import P from 'prop-types';
import { ContextDefaultProvide } from './contexts/ContextDefault';
import { Div } from './components/Div';
import './App.css';

const UseContext = () => {
  return (
    <ContextDefaultProvide>
      <Div />
    </ContextDefaultProvide>
  );
};

export { UseContext };
