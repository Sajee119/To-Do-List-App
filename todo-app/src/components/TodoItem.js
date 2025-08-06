import React, { useState } from 'react';
import { Trash2, Edit3, Check, X } from 'lucide-react';

const TodoItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');

  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(editTitle.trim(), editDescription.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <div className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            className="edit-input"
            autoFocus
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Description (optional)..."
            className="edit-description"
            rows="2"
          />
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">
              <Check size={16} />
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggle}
            className="task-checkbox"
          />
          <span className="checkmark"></span>
        </label>
        
        <div className="task-details">
          <h3 className="task-title">{task.title}</h3>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
        </div>
      </div>
      
      <div className="task-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="edit-btn"
          aria-label="Edit task"
        >
          <Edit3 size={16} />
        </button>
        <button
          onClick={onDelete}
          className="delete-btn"
          aria-label="Delete task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;