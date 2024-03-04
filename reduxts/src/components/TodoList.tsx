import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const { todos, error, loading, page, limit } = useTypedSelector(
    (state) => state.todo,
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <>Идет загрузка...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <div>
      {todos.map((todo: TodoType) => (
        <div key={todo.id}>
          {todo.id}-{todo.title}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '2px solid green' : '1px solid grey',
              padding: '3px 5px',
              cursor: 'pointer',
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
