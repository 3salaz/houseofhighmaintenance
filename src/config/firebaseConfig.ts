import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR7886_oDniVTwKY6xaxo62T7broDe6XE",
  authDomain: "houseofhighmaintenance-e4067.firebaseapp.com",
  projectId: "houseofhighmaintenance-e4067",
  storageBucket: "houseofhighmaintenance-e4067.firebasestorage.app",
  messagingSenderId: "560540645511",
  appId: "1:560540645511:web:1b7e7bbdf6601a91952022",
  measurementId: "G-T7QKQG7FQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
