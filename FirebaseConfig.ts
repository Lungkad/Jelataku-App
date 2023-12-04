// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBmhoI90VWanb53Njc61xNwOpo0aeFvAE",
  authDomain: "jelataku-d166b.firebaseapp.com",
  databaseURL: "https://jelataku-d166b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jelataku-d166b",
  storageBucket: "jelataku-d166b.appspot.com",
  messagingSenderId: "359145156268",
  appId: "1:359145156268:web:53bf0c2e435fcd01d27909",
  measurementId: "G-65CNQCH6HV"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App);
export const Firebase_DB = getDatabase(Firebase_App);
