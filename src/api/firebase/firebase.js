// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApwaFlra0EUNbcahWA9xfi086nacj_Kro",
  authDomain: "odins-store.firebaseapp.com",
  projectId: "odins-store",
  storageBucket: 'gs://odins-store.appspot.com/',
  messagingSenderId: "1011139698868",
  appId: "1:1011139698868:web:575915f7f62cefb7b7f7e1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
