import { useContext } from 'react';
import { ContextDefault } from '../../contexts/ContextDefault';

const H1 = () => {
  const theContext = useContext(ContextDefault);
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
