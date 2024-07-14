import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "//",
  authDomain: "boxclonedd.firebaseapp.com",
  databaseURL: "https://boxclonedd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boxclonedd",
  storageBucket: "boxclonedd.appspot.com",
  messagingSenderId: "//",
  appId: "//",
  measurementId: "//"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
