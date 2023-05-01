// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNSK92L9zGvELZllCjTY-GzPFzKfw3etc",
  authDomain: "bd-chef-clien-site.firebaseapp.com",
  projectId: "bd-chef-clien-site",
  storageBucket: "bd-chef-clien-site.appspot.com",
  messagingSenderId: "12125192579",
  appId: "1:12125192579:web:ac2ff07494d16c69d536b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;