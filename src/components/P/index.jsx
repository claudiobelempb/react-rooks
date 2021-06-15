import { useContext } from 'react';
import { ContextDefault } from '../../contexts/ContextDefault';

const P = () => {
  const theContext = useContext(ContextDefault);
  console.log(theContext);
  const {
    stateProvide: { body, counter },
    //stateProvide,
    setStateProvide,
  } = theContext;
  return (
    // <p onClick={() => setStateProvide({ ...stateProvide, counter: counter + 1 })}>
    //   {body} - {counter}
    // </p>
    <p onClick={() => setStateProvide((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body} - {counter}
    </p>
  );
};

export { P };
