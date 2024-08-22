import React from "react";
import { useState } from "react";

const TaskInputForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Task Manager</h2>
        <p className="text-muted-foreground">
          Add new tasks and track your progress.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2 pt-4">
          <label className="text-sm font-medium">New Task</label>
          <br />
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInputForm;
