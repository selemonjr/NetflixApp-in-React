import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBSXQpVgw6e4TuHGBSa6yND6M4Sfi6VBw0",
    authDomain: "netflix-38db4.firebaseapp.com",
    projectId: "netflix-38db4",
    storageBucket: "netflix-38db4.appspot.com",
    messagingSenderId: "379975811896",
    appId: "1:379975811896:web:96a6cbb102d58c5dd777cd",
    measurementId: "G-XY8XF1R7SR"
  };
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
