import { useContext } from 'react';
import { StateContext } from '../contexts/stateContext';

const P = () => {
  const theContext = useContext(StateContext);
  const {
    stateProvide: { body, counter },
    stateProvide,
    setStateProvide,
  } = theContext;
  return (
    <p onClick={() => setStateProvide({ ...stateProvide, counter: counter + 1 })}>
      {body} - {counter}
    </p>
  );
};

export { P };
