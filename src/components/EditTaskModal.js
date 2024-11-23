import React, { useState } from "react";
import "./EditTaskModal.css"; 

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(updatedTask);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Edit Task</h5>
          <button className="btn btn-close" onClick={closeModal} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={updatedTask.title}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={updatedTask.description}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={updatedTask.dueDate}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={updatedTask.status}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
        <div className="modal-footer button-container">
          <button className="btn btn-save" onClick={handleUpdate}>
            Save Changes
          </button>
          <button className="btn btn-cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
