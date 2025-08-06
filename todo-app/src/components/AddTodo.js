import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      setShowDescription(false);
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          autoFocus
        />
        <button 
          type="submit" 
          className="add-btn"
          disabled={!title.trim()}
        >
          <Plus size={20} />
        </button>
      </div>
      
      {showDescription && (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)"
          className="description-input"
          rows={3}
        />
      )}
      
      <button
        type="button"
        className="toggle-description"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? 'Hide' : 'Add'} Description
      </button>
    </form>
  );
};

export default AddTodo;