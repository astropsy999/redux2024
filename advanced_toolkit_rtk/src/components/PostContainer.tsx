import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleAddPost = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div>
      <div>
        <button onClick={handleAddPost}>Добавить пост</button>
        {posts?.map((post) => (
          <PostItem
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        ))}
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка!</h1>}
      </div>
    </div>
  );
};

export default PostContainer;
