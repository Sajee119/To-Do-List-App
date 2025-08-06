// Firebase configuration (optional)
// To use Firebase, install firebase: npm install firebase
// Uncomment and configure the code below with your Firebase project settings

/*
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  query,
  orderBy 
} from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firebase operations
export const firebaseOperations = {
  // Subscribe to tasks collection
  subscribeTasks: (callback) => {
    const q = query(collection(db, 'tasks'), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(tasks);
    });
  },

  // Add a new task
  addTask: async (task) => {
    try {
      const docRef = await addDoc(collection(db, 'tasks'), {
        ...task,
        createdAt: new Date().toISOString()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  // Update a task
  updateTask: async (id, updates) => {
    try {
      const taskRef = doc(db, 'tasks', id);
      await updateDoc(taskRef, updates);
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  // Delete a task
  deleteTask: async (id) => {
    try {
      await deleteDoc(doc(db, 'tasks', id));
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },

  // Clear completed tasks
  clearCompleted: async (completedTaskIds) => {
    try {
      const deletePromises = completedTaskIds.map(id => 
        deleteDoc(doc(db, 'tasks', id))
      );
      await Promise.all(deletePromises);
    } catch (error) {
      console.error('Error clearing completed tasks:', error);
      throw error;
    }
  }
};

export default db;
*/

// Default export for when Firebase is not configured
export const firebaseOperations = null;
export default null;