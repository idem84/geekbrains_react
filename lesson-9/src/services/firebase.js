// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZCAiQAKFjEDCIe86hlgkwI7y1nT1dXFo",
  authDomain: "gb-lesson-9.firebaseapp.com",
  projectId: "gb-lesson-9",
  storageBucket: "gb-lesson-9.appspot.com",
  messagingSenderId: "1038042371397",
  appId: "1:1038042371397:web:225d4ce42aec3332c61a2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);
export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);
export const logOut = async () => await signOut(auth);
export const db = getDatabase(app);
export const userRef = ref(db, "user");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
