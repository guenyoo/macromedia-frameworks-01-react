import { TodoList } from './TodoList';
import initialTodos from '../mocks/initial-todo.json';

const Todos = () => {
  return (
    <div className="grid gap-5">
      <TodoList todos={initialTodos} />
    </div>
  );
};

export { Todos };
