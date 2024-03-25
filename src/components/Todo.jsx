/* eslint-disable react/prop-types */
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

const Todo = (props) => {
  return (
    <article className="grid grid-cols-3 grid-flow-col auto-cols-max border border-slate-300 rounded p-3">
      <input
        type="checkbox"
        id={props.id}
        className="mr-auto"
        defaultChecked={props.completed}
        onChange={() => props.changeHandler(props.id)}
      />
      <label className="cursor-pointer" htmlFor={props.id}>
        {props.name}
      </label>
      <button
        className="group"
        onClick={() => props.removeTodoHandler(props.id)}
      >
        <ArchiveBoxXMarkIcon className="w-6 h-6 ml-auto group-hover:stroke-white group-hover:fill-neutral-600" />
      </button>
    </article>
  );
};

export { Todo };
