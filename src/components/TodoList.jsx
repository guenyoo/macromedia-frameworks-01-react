/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Todo } from './Todo';
import { useTodos } from './Todolist.hooks';
import { useState } from 'react';
import { clsx } from 'clsx';

const TodoList = ({ todos }) => {
  const [openTodos, completedTodos, changeTodoState, addTodo, removeTodo] =
    useTodos(todos);
  const [inputText, setInputText] = useState('');
  const disabled = !inputText;

  const changeInputText = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <section className="grid gap-3">
        <h3 className="text-2xl">Add ToDo</h3>
        <input
          className="border rounded p-3"
          type="text"
          name="add-todo"
          id="add-todo"
          placeholder="Nächstes Todo?"
          value={inputText}
          onChange={changeInputText}
        />
        <button
          className={clsx('p-3 rounded  shadow cursor-pointer', {
            'bg-teal-200 text-teal-700': !disabled,
            'bg-neutral-200 text-neutral-700': disabled,
          })}
          disabled={!inputText}
          onClick={() => {
            setInputText('');
            addTodo(inputText);
          }}
        >
          Todo hinzufügen
        </button>
      </section>
      <section className="grid gap-3">
        <h3 className="text-2xl">Open ToDo's</h3>
        {openTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            changeHandler={changeTodoState}
            removeTodoHandler={removeTodo}
          />
        ))}
      </section>

      <section className="grid gap-3">
        <h3 className="text-2xl">Completed ToDo's</h3>
        {completedTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            changeHandler={changeTodoState}
            removeTodoHandler={removeTodo}
          />
        ))}
      </section>
    </>
  );
};

export { TodoList };
