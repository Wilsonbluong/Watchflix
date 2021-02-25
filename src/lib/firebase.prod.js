import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCY82cbePXhS5rVlUvvoGCp-vo5ZKV3KMg",
  authDomain: "watchflix-13b2f.firebaseapp.com",
  projectId: "watchflix-13b2f",
  storageBucket: "watchflix-13b2f.appspot.com",
  messagingSenderId: "111624284310",
  appId: "1:111624284310:web:c25db0b2292b4116913ab7",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
