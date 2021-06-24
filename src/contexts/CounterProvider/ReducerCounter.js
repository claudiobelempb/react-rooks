import * as types from './TypesCounter';

const ReducerCounter = (state, action) => {
  console.log('Reducer', state, action);
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      console.log(action.type);
      return { ...state, counter: state.counter + 1 };
    }
    case types.DECREMENT_COUNTER: {
      console.log(action.type);
      return { ...state, counter: state.counter - 1 };
    }
  }
  console.log('Not action!', action.type);
  return { ...state };
};

export { ReducerCounter };
