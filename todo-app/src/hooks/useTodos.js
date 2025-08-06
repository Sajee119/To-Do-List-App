import { useState, useEffect, useCallback } from 'react';
import storageService from '../services/storageService';

export const useTodos = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial tasks
  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const initialTasks = await storageService.getTasks();
        setTasks(initialTasks);
        setError(null);
      } catch (err) {
        setError('Failed to load tasks');
        console.error('Error loading tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();

    // Set up real-time listener for Firebase
    let unsubscribe = null;
    if (storageService.useFirebase) {
      unsubscribe = storageService.subscribeToTasks((updatedTasks) => {
        setTasks(updatedTasks);
        setLoading(false);
      });
    }

    // Cleanup
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      storageService.unsubscribeAll();
    };
  }, []);

  // Save to localStorage when tasks change (only for local storage)
  useEffect(() => {
    if (!storageService.useFirebase && tasks.length >= 0) {
      storageService.saveTasksToLocal(tasks);
    }
  }, [tasks]);

  const addTask = useCallback(async (title, description = '') => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };

    try {
      if (storageService.useFirebase) {
        // For Firebase, the real-time listener will update the state
        await storageService.addTask(newTask);
      } else {
        // For local storage, update state directly
        setTasks(prevTasks => [newTask, ...prevTasks]);
      }
      setError(null);
    } catch (err) {
      setError('Failed to add task');
      console.error('Error adding task:', err);
    }
  }, []);

  const deleteTask = useCallback(async (id) => {
    try {
      if (storageService.useFirebase) {
        // For Firebase, the real-time listener will update the state
        await storageService.deleteTask(id);
      } else {
        // For local storage, update state directly
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      }
      setError(null);
    } catch (err) {
      setError('Failed to delete task');
      console.error('Error deleting task:', err);
    }
  }, []);

  const toggleTask = useCallback(async (id) => {
    try {
      if (storageService.useFirebase) {
        const task = tasks.find(t => t.id === id);
        if (task) {
          await storageService.updateTask(id, { completed: !task.completed });
        }
        // Real-time listener will update the state
      } else {
        // For local storage, update state directly
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      }
      setError(null);
    } catch (err) {
      setError('Failed to update task');
      console.error('Error updating task:', err);
    }
  }, [tasks]);

  const editTask = useCallback(async (id, title, description = '') => {
    try {
      if (storageService.useFirebase) {
        await storageService.updateTask(id, { title, description });
        // Real-time listener will update the state
      } else {
        // For local storage, update state directly
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === id ? { ...task, title, description } : task
          )
        );
      }
      setError(null);
    } catch (err) {
      setError('Failed to edit task');
      console.error('Error editing task:', err);
    }
  }, []);

  const clearCompleted = useCallback(async () => {
    try {
      const completedTasks = tasks.filter(task => task.completed);
      const completedTaskIds = completedTasks.map(task => task.id);

      if (storageService.useFirebase) {
        await storageService.clearCompleted(completedTaskIds);
        // Real-time listener will update the state
      } else {
        // For local storage, update state directly
        setTasks(prevTasks => prevTasks.filter(task => !task.completed));
      }
      setError(null);
    } catch (err) {
      setError('Failed to clear completed tasks');
      console.error('Error clearing completed tasks:', err);
    }
  }, [tasks]);

  const getStorageType = useCallback(() => {
    return storageService.getStorageType();
  }, []);

  return {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
    getStorageType
  };
};