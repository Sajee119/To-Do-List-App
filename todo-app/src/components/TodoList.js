import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete, onToggle, onEdit }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;