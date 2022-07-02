import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk4OeG5zlXUAZ2Ck02fj17qV1kbUIAHZg",
  authDomain: "todo-app-97d65.firebaseapp.com",
  projectId: "todo-app-97d65",
  storageBucket: "todo-app-97d65.appspot.com",
  messagingSenderId: "202482292000",
  appId: "1:202482292000:web:0b192ba0b1b8e611d0f345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;