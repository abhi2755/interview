import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADSINDIucjQuMQPPCQzN5jBABAj6TYE5M",
  authDomain: "prepwise-12028.firebaseapp.com",
  projectId: "prepwise-12028",
  storageBucket: "prepwise-12028.firebasestorage.app",
  messagingSenderId: "417597256405",
  appId: "1:417597256405:web:4aad05cb503901b978685c",
  measurementId: "G-VG4NPMJHMK",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
