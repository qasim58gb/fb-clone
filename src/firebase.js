import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8EJodZNLxFIO7vuf2LKRvtL4v_M9fO58",
  authDomain: "fb-clone-a4e87.firebaseapp.com",
  projectId: "fb-clone-a4e87",
  storageBucket: "fb-clone-a4e87.appspot.com",
  messagingSenderId: "772175743921",
  appId: "1:772175743921:web:8ca83729cfe3c6b42b4b90",
  measurementId: "G-0EDM3P6ZYB"
};


export const app = initializeApp(firebaseConfig);
const db =getFirestore(app)
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider()
 export default db;

 
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth";
// // import {getStorage} from "firebase/storage";


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB8EJodZNLxFIO7vuf2LKRvtL4v_M9fO58",
//      authDomain: "fb-clone-a4e87.firebaseapp.com",
//     projectId: "fb-clone-a4e87",
//     storageBucket: "fb-clone-a4e87.appspot.com",
//     messagingSenderId: "772175743921",
//     appId: "1:772175743921:web:8ca83729cfe3c6b42b4b90",
//     measurementId: "G-0EDM3P6ZYB"
// }


// // Initialize Firebase Authentication and get a reference to the service
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// // const storage = getStorage(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };
// export default db;