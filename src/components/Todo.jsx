import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

const Todo = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-red">ToDo Component</h2>
      <div className="grid grid-cols-3 grid-flow-col auto-cols-max border border-slate-300 rounded p-3">
        <input type="checkbox" id="ToDo1" className="mr-auto" />
        <label htmlFor="ToDo1">ToDo1</label>
        <ArchiveBoxXMarkIcon
          onClick={console.log}
          className="w-6 h-6 ml-auto"
        />
      </div>
    </div>
  );
};

export { Todo };
