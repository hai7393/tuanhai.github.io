// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZO5a5w-kSjuUpgKEB5qITipBJoj7VuJE",
  authDomain: "project1-5b214.firebaseapp.com",
  projectId: "project1-5b214",
  storageBucket: "project1-5b214.appspot.com",
  messagingSenderId: "937065989904",
  appId: "1:937065989904:web:64a6ab2f91f2beefda4795"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app()
}
const auth = firebase.auth();
export {
  auth
}
