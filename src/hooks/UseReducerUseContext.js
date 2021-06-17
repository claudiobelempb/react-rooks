import P from 'prop-types';
import { createContext, useReducer, useContext, useRef } from 'react';

// actions.js
const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const products = {
  title: 'Title do product',
  description: 'Description product',
  price: 230.0,
  imgs: ['img - 1', 'img - 2'],
  status: true,
};

//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar Title');
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext.jsx
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, products);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
const H1 = () => {
  const {
    changeTitle,
    state: { title, description, price, imgs },
  } = useContext(Context);
  const elInput = useRef();
  return (
    <>
      <input ref={elInput} />
      <h1 onClick={() => changeTitle(elInput.current.value)}>{title}</h1>
      <p>{description}</p>
      <small>{price} </small>
      {imgs.map((img, index) => {
        console.log(img, index);
        return <p key={index}>{img}</p>;
      })}
    </>
  );
};

const UseReducerUseContext = () => {
  return (
    <AppContext>
      <div className={'App'}>
        <H1 />
      </div>
    </AppContext>
  );
};

export { UseReducerUseContext };
