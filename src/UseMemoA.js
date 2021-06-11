import P from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import './App.css';

const Posts = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className={'posts-card'}>
      <h1>{post.title}</h1>
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
};

const UseMemoA = () => {
  console.log('Pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(function () {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <p>
          <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
        </p>
        {useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => {
              return <Posts key={post.id} post={post} />;
            })
          );
        }, [posts])}

        {posts.length <= 0 && <p>carregando....</p>}
      </header>
    </div>
  );
};

export { UseMemoA };
