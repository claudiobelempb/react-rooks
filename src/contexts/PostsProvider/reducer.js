import * as types from './type';

const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING: {
      // console.log(action.type);
      return { ...state, loading: true };
    }
    case types.POSTS_SUCCESS: {
      // console.log(action.type);
      return { ...state, posts: action.payload, loading: false };
    }
  }
  console.log('Not action!', action.type);
  return { ...state };
};

export { reducer };
