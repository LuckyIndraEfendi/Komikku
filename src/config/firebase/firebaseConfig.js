import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqi_RrtG-Fxv5rSaqJHkxZhP_cWueYdFE",
  authDomain: "waifu-komik.firebaseapp.com",
  projectId: "waifu-komik",
  storageBucket: "waifu-komik.appspot.com",
  messagingSenderId: "633822526006",
  appId: "1:633822526006:web:eda415ded64987ae36b697",
  measurementId: "G-VZWSMFYP7P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
export default app;
