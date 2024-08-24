import React, { useState } from "react";
import TaskInputForm from "./component/TaskInputForm";
import TaskItem from "./component/TaskItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    setTasks([...tasks, { id: Date.now(), description, completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md mx-auto space-y-6 sm:p-4 md:p-6 lg:p-8">
        <TaskInputForm addTask={addTask} />
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Tasks</h3>
          <div
            className={`max-h-80 overflow-y-auto custom-scrollbar rounded-lg space-y-2 ${
              tasks.length > 0 ? "border border-gray-300" : ""
            }`}
          >
            {tasks.length === 0 ? (
              <p className="text-muted-foreground p-4">No tasks yet.</p>
            ) : (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
