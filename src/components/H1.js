import { useContext } from 'react';
import { StateContext } from '../contexts/stateContext';

const H1 = () => {
  const theContext = useContext(StateContext);
  const {
    stateProvide: { title, counter },
  } = theContext;
  // console.log(theContext);
  return (
    <h1>
      {title} - {counter}
    </h1>
  );
};

export { H1 };
