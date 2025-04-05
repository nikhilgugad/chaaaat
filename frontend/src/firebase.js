import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDWH9XV4D5tr1DpmkM57acl7yGhXZjQMv0",
  authDomain: "achat-cbd1e.firebaseapp.com",
  projectId: "achat-cbd1e",
  storageBucket: "achat-cbd1e.firebasestorage.app",
  messagingSenderId: "121167636722",
  appId: "1:121167636722:web:67e8fdb9131a921239486b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore init
const db = getFirestore(app);

// Export db properly
export { db };