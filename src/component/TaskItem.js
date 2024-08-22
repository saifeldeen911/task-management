import React from "react";

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          className="h-4 w-4 form-checkbox"
        />
        <span
          className={`flex-1 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.description}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
