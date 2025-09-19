// lib/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQ-gppvddxFvJ7wukXObNnEBbmeTa-1ao",
  authDomain: "my-portofolio-cfb1c.firebaseapp.com",
  projectId: "my-portofolio-cfb1c",
  storageBucket: "my-portofolio-cfb1c.firebasestorage.app",
  messagingSenderId: "417699715448",
  appId: "1:417699715448:web:dedf78e2994d390fe4908d",
  measurementId: "G-Q5MZVYYC77"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
