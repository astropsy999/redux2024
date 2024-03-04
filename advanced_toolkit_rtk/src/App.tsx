import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer,
  // );

  useEffect(() => {
    // dispatch(fetchUsers());
  }, []);
  return (
    <>
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users)} */}
      <div style={{ display: 'flex' }}>
        <PostContainer />
        {/* <PostContainer2 /> */}
      </div>
    </>
  );
}

export default App;
