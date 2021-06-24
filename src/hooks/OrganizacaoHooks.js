import { PostsProvider } from '../contexts/PostsProvider';
import { CounterProvider } from '../contexts/CounterProvider';

import { Posts } from '../components/Posts';

const OrganizacaoHooks = () => {
  return (
    <div className={'App'}>
      <CounterProvider>
        <PostsProvider>
          <Posts />
        </PostsProvider>
      </CounterProvider>
    </div>
  );
};

export { OrganizacaoHooks };
