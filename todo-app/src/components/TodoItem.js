import React, { useState } from 'react';
import { Trash2, Edit3, Check, X } from 'lucide-react';

const TodoItem = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');

  const handleEdit = () => {
    if (editTitle.trim()) {
      onEdit(task.id, editTitle.trim(), editDescription.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={handleKeyPress}
          className="edit-input title"
          placeholder="Task title"
          autoFocus
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          onKeyDown={handleKeyPress}
          className="edit-input description"
          placeholder="Description (optional)"
          rows={2}
        />
        <div className="edit-actions">
          <button 
            className="save-btn"
            onClick={handleEdit}
            disabled={!editTitle.trim()}
          >
            <Check size={16} />
          </button>
          <button 
            className="cancel-btn"
            onClick={handleCancel}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="todo-checkbox"
      />
      
      <div className="todo-content" onClick={() => setIsEditing(true)}>
        <h3 className="todo-title">{task.title}</h3>
        {task.description && (
          <p className="todo-description">{task.description}</p>
        )}
      </div>

      <div className="todo-actions">
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
          aria-label="Edit task"
        >
          <Edit3 size={16} />
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
          aria-label="Delete task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;