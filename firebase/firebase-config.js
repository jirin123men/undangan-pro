// firebase/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyB2QZLpk8eELmb3RdABQPlrayvLV0vqKcA",
authDomain: "undangan-pro-a2f24.firebaseapp.com",
projectId: "undangan-pro-a2f24",
storageBucket: "undangan-pro-a2f24.firebasestorage.app",
messagingSenderId: "509535840012",
appId: "1:509535840012:web:ee474d8796986836258b29",
measurementId: "G-05EV2FH5Y8"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;
