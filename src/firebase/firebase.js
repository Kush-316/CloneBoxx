import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAg6M2Tzscr1cRa4HMzMme4X0QYq2CN8k4",
  authDomain: "boxclonedd.firebaseapp.com",
  databaseURL: "https://boxclonedd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boxclonedd",
  storageBucket: "boxclonedd.appspot.com",
  messagingSenderId: "1003851103298",
  appId: "1:1003851103298:web:692a4f937aa39741c0c1db",
  measurementId: "G-4598D9R70F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
