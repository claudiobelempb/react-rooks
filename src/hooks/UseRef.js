import P from 'prop-types';
import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';

const Posts = ({ post, func }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className={'posts-card'}>
      <h1 style={{ fontSize: '48px' }} onClick={() => func(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  func: P.func,
};

const UseRef = () => {
  console.log('Pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const elInput = useRef(null);
  const counter = useRef(0);

  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    elInput.current.focus();
    console.log(elInput.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>Renderizou : {counter.current} X </h1>
        <p>
          <input ref={elInput} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
        </p>
        {useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => {
              return <Posts key={post.id} post={post} func={handleClick} />;
            })
          );
        }, [posts])}

        {posts.length <= 0 && <p>carregando....</p>}
      </header>
    </div>
  );
};

export { UseRef };
