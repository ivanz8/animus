// firebase/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQRZsiU5GA8RS8wVFbJZmugltN3R7p2mc",
    authDomain: "animus-54d1e.firebaseapp.com",
    databaseURL: "https://animus-54d1e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "animus-54d1e",
    storageBucket: "animus-54d1e.appspot.com",
    messagingSenderId: "446756929721",
    appId: "1:446756929721:web:e02562ba34e8c66a9f5b68",
    measurementId: "G-DC0XWYPENX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export { app, analytics };