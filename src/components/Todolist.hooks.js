import { useState } from 'react';

const useTodos = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  // Der useState Hook ist die Möglichkeit von React, auf Variablen
  // und Veränderungen zu hören und den Komponentenbaum neu zu rendern
  // bei Änderungen an besagtem State
  // das in Klammern ist immer der initial zu vergebende Wert,
  // in diesem Fall also das initiale Todo Array aus den props
  const [stateTodos, setStateTodos] = useState(initialTodos);

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

  return [openTodos, completedTodos, changeTodoState];
};

export { useTodos };
