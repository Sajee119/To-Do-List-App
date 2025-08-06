// Custom hook for Firebase integration (optional)
// Uncomment and use when Firebase is configured

/*
import { useState, useEffect } from 'react';
import { firebaseOperations } from '../utils/firebase';

export const useFirebase = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!firebaseOperations) {
      setLoading(false);
      return;
    }

    const unsubscribe = firebaseOperations.subscribeTasks((tasks) => {
      setTasks(tasks);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async (title, description = '') => {
    try {
      const newTask = {
        title,
        description,
        completed: false
      };
      await firebaseOperations.addTask(newTask);
    } catch (err) {
      setError('Failed to add task');
      console.error(err);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      await firebaseOperations.updateTask(id, updates);
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await firebaseOperations.deleteTask(id);
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  const clearCompleted = async () => {
    try {
      const completedTaskIds = tasks
        .filter(task => task.completed)
        .map(task => task.id);
      await firebaseOperations.clearCompleted(completedTaskIds);
    } catch (err) {
      setError('Failed to clear completed tasks');
      console.error(err);
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    clearCompleted
  };
};
*/

// Default hook when Firebase is not configured
export const useFirebase = () => {
  return {
    tasks: [],
    loading: false,
    error: null,
    addTask: () => {},
    updateTask: () => {},
    deleteTask: () => {},
    clearCompleted: () => {}
  };
};