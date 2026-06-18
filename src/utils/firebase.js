import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByiSYTQut2EgtGqK0z4ejkU4UcRHVsPoE",
  authDomain: "kubejs-wiki-feedback.firebaseapp.com",
  projectId: "kubejs-wiki-feedback",
  storageBucket: "kubejs-wiki-feedback.firebasestorage.app",
  messagingSenderId: "981159107720",
  appId: "1:981159107720:web:1a6d89137beccbd328533d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);