// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyAUC_lDjOTvcM-5Psu_pZ1Oi0-2huS6XdU",
  authDomain: "genius-car-services-d6bf1.firebaseapp.com",
  projectId: "genius-car-services-d6bf1",
  storageBucket: "genius-car-services-d6bf1.appspot.com",
  messagingSenderId: "676417365251",
  appId: "1:676417365251:web:82ba69e2e57ca4f5437536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

