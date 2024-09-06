import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBqAcpAyrd6IFurIo1RqYNm0jjx8DtP4Zw",
  authDomain: "my-portfolio-4a416.firebaseapp.com",
  projectId: "my-portfolio-4a416",
  storageBucket: "my-portfolio-4a416.appspot.com",
  messagingSenderId: "649480337778",
  appId: "1:649480337778:web:2b32d3f2c74ddbfe0a85eb",
  measurementId: "G-7ZH3H71JEK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);