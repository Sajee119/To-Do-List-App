import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      setShowDescription(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
          autoFocus
        />
        <button type="submit" className="add-btn" disabled={!title.trim()}>
          <Plus size={20} />
        </button>
      </div>
      
      {showDescription && (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)..."
          className="description-input"
          rows="2"
        />
      )}
      
      <button
        type="button"
        onClick={() => setShowDescription(!showDescription)}
        className="toggle-description-btn"
      >
        {showDescription ? 'Hide' : 'Add'} Description
      </button>
    </form>
  );
};

export default AddTask;