/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Todo } from './Todo';
import { useState } from 'react';

const TodoList = ({ todos }) => {
  // Der useState Hook ist die Möglichkeit von React, auf Variablen
  // und Veränderungen zu hören und den Komponentenbaum neu zu rendern
  // bei Änderungen an besagtem State
  // das in Klammern ist immer der initial zu vergebende Wert,
  // in diesem Fall also das initiale Todo Array aus den props
  const [stateTodos, setStateTodos] = useState(todos);

  // Hier separieren wir nur noch nach bereits abgeschlossenen
  // und noch offenen Todos
  const openTodos = stateTodos.filter((todo) => !todo.completed);
  const completedTodos = stateTodos.filter((todo) => todo.completed);

  const changeTodoState = (id) => {
    const todosToChange = stateTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setStateTodos(todosToChange);
  };

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
        <h3 className="text-xl ">Completed ToDo's</h3>
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
