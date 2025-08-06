// Firebase configuration
// To use Firebase, replace the config below with your Firebase project config
// and set REACT_APP_USE_FIREBASE=true in your .env file

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config object goes here
// Get this from your Firebase project settings
const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "demo-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Check if Firebase should be used
export const useFirebase = process.env.REACT_APP_USE_FIREBASE === 'true';