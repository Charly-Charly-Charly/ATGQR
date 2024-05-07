import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { events, loadEvents } = useTasks();

  useEffect(() => {
    loadEvents();
  }, []);

  function renderMain() {
    if (events.length === 0) return <h1>No tasks yet</h1>;
    return events.map((event) => <TaskCard event={event} key={event.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Eventos</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
