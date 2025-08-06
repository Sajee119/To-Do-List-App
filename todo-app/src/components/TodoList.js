import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }) => {
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
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
          onEdit={(title, description) => onEditTask(task.id, title, description)}
        />
      ))}
    </div>
  );
};

export default TodoList;