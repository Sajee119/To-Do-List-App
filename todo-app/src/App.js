import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterButtons from './components/FilterButtons';
import { Moon, Sun, Trash2, Database, HardDrive, Loader } from 'lucide-react';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
    getStorageType
  } = useTodos();

  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('todo-app-dark-mode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('todo-app-dark-mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.filter(task => !task.completed).length;
  const storageType = getStorageType();

  if (loading) {
    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <div className="container">
          <div className="loading-state">
            <Loader size={48} className="spinner" />
            <p>Loading your tasks...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <header className="header">
          <div className="header-left">
            <h1>Todo App</h1>
            <div className="storage-indicator">
              {storageType === 'Firebase' ? (
                <>
                  <Database size={16} /> Firebase
                </>
              ) : (
                <>
                  <HardDrive size={16} /> Local Storage
                </>
              )}
            </div>
          </div>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <AddTodo onAdd={addTask} />

        <div className="stats">
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>

        <FilterButtons 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />

        <TodoList
          tasks={getFilteredTasks()}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />

        {completedCount > 0 && (
          <button 
            className="clear-completed"
            onClick={clearCompleted}
          >
            <Trash2 size={16} />
            Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
