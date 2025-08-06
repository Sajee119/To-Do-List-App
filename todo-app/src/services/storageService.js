import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy,
  onSnapshot 
} from 'firebase/firestore';
import { db, useFirebase } from './firebaseConfig';

const STORAGE_KEY = 'todo-app-tasks';
const COLLECTION_NAME = 'todos';

class StorageService {
  constructor() {
    this.useFirebase = useFirebase;
    this.listeners = [];
  }

  // Local Storage Methods
  async getTasksFromLocal() {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  async saveTasksToLocal(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  // Firebase Methods
  async getTasksFromFirebase() {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
      });
      return tasks;
    } catch (error) {
      console.error('Error fetching tasks from Firebase:', error);
      return [];
    }
  }

  async addTaskToFirebase(task) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        title: task.title,
        description: task.description,
        completed: task.completed,
        createdAt: task.createdAt
      });
      return { id: docRef.id, ...task };
    } catch (error) {
      console.error('Error adding task to Firebase:', error);
      throw error;
    }
  }

  async updateTaskInFirebase(id, updates) {
    try {
      const taskRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(taskRef, updates);
    } catch (error) {
      console.error('Error updating task in Firebase:', error);
      throw error;
    }
  }

  async deleteTaskFromFirebase(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error('Error deleting task from Firebase:', error);
      throw error;
    }
  }

  async deleteMultipleTasksFromFirebase(ids) {
    try {
      const deletePromises = ids.map(id => deleteDoc(doc(db, COLLECTION_NAME, id)));
      await Promise.all(deletePromises);
    } catch (error) {
      console.error('Error deleting multiple tasks from Firebase:', error);
      throw error;
    }
  }

  // Unified Interface Methods
  async getTasks() {
    if (this.useFirebase) {
      return await this.getTasksFromFirebase();
    } else {
      return await this.getTasksFromLocal();
    }
  }

  async addTask(task) {
    if (this.useFirebase) {
      return await this.addTaskToFirebase(task);
    } else {
      // For local storage, we need to handle this differently
      // This method is called from the component level for Firebase
      // For local storage, the component handles the state directly
      return task;
    }
  }

  async updateTask(id, updates) {
    if (this.useFirebase) {
      await this.updateTaskInFirebase(id, updates);
    }
    // For local storage, updates are handled at component level
  }

  async deleteTask(id) {
    if (this.useFirebase) {
      await this.deleteTaskFromFirebase(id);
    }
    // For local storage, deletion is handled at component level
  }

  async clearCompleted(completedTaskIds) {
    if (this.useFirebase) {
      await this.deleteMultipleTasksFromFirebase(completedTaskIds);
    }
    // For local storage, clearing is handled at component level
  }

  // Real-time listener for Firebase
  subscribeToTasks(callback) {
    if (this.useFirebase) {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasks = [];
        querySnapshot.forEach((doc) => {
          tasks.push({ id: doc.id, ...doc.data() });
        });
        callback(tasks);
      }, (error) => {
        console.error('Error listening to tasks:', error);
      });
      
      this.listeners.push(unsubscribe);
      return unsubscribe;
    }
    return null;
  }

  // Clean up listeners
  unsubscribeAll() {
    this.listeners.forEach(unsubscribe => unsubscribe());
    this.listeners = [];
  }

  // Get storage type
  getStorageType() {
    return this.useFirebase ? 'Firebase' : 'Local Storage';
  }
}

const storageServiceInstance = new StorageService();
export default storageServiceInstance;