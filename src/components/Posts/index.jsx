import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { incrementCounter, decrementCounter } from '../../contexts/CounterProvider/ActionsCounter';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { ContextCounter } from '../../contexts/CounterProvider/ContextCounter';
const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(ContextCounter);
  const { counterState, counterDispatch } = counterContext;
  // console.log(counterDispatch);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
      return () => {
        isMounted.current = false;
      };
    });
  }, [postsDispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter: {counterState.counter} + </button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter: {counterState.counter} - </button>
      {postsState.loading && <strong>loading....</strong>}
      {postsState.posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export { Posts };
