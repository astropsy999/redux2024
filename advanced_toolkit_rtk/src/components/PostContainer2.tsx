import { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer2 = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, { pollingInterval: 2000 });

  useEffect(() => {
    setTimeout(() => {
      setLimit(3);
    }, 2000);
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => refetch()}>Refetch</button>
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка!</h1>}
      </div>
    </div>
  );
};

export default PostContainer2;
