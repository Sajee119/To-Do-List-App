import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import FilterButtons from './components/FilterButtons';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    const savedTheme = localStorage.getItem('todoTheme');
    
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Save theme to localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('todoTheme', darkMode ? 'dark' : 'light');
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const addTask = (title, description = '') => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id, title, description = '') => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title, description } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

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

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="app-header">
          <h1>Todo List</h1>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <AddTask onAddTask={addTask} />

        <FilterButtons 
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
        />

        <TodoList 
          tasks={getFilteredTasks()}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />

        {completedCount > 0 && (
          <div className="clear-completed">
            <button onClick={clearCompleted} className="clear-btn">
              Clear Completed ({completedCount})
            </button>
          </div>
        )}

        <div className="task-summary">
          <span>{activeCount} active, {completedCount} completed</span>
        </div>
      </div>
    </div>
  );
}

export default App;
