import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

const Todo = () => {
  return (
    <div className="grid gap-5">
      <h2 className="text-2xl font-semibold text-red">ToDo Component</h2>
      <section className="grid gap-3">
        <h3 className="text-xl ">Open ToDo's</h3>
        <div className="grid grid-cols-3 grid-flow-col auto-cols-max border border-slate-300 rounded p-3">
          <input type="checkbox" id="ToDo1" className="mr-auto" />
          <label htmlFor="ToDo1">ToDo1</label>
          <ArchiveBoxXMarkIcon
            onClick={console.log}
            className="w-6 h-6 ml-auto"
          />
        </div>
      </section>

      <section className="grid gap-3">
        <h3 className="text-xl ">Completed ToDo's</h3>
        <div className="grid grid-cols-3 grid-flow-col auto-cols-max border border-slate-300 rounded p-3">
          <input
            type="checkbox"
            id="ToDo2"
            className="mr-auto"
            defaultChecked
          />
          <label htmlFor="ToDo2">ToDo2</label>
          <ArchiveBoxXMarkIcon
            onClick={console.log}
            className="w-6 h-6 ml-auto"
          />
        </div>
      </section>
    </div>
  );
};

export { Todo };
