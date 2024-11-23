import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import './TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <div className="button-container">
              <button
                className="btn btn-edit"
                onClick={() => setEditingTask(task)}
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={updateTask}
          closeModal={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
