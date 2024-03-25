/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Todo } from './Todo';
import { useTodos } from './Todolist.hooks';

const TodoList = ({ todos }) => {
  const [openTodos, completedTodos, changeTodoState] = useTodos(todos);

  return (
    <>
      <section className="grid gap-3">
        <h3 className="text-xl">Open ToDo's</h3>
        {openTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            changeHandler={changeTodoState}
          />
        ))}
      </section>

      <section className="grid gap-3">
        <h3 className="text-xl">Completed ToDo's</h3>
        {completedTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            changeHandler={changeTodoState}
          />
        ))}
      </section>
    </>
  );
};

export { TodoList };
