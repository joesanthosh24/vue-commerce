import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ6r7Oxl0g9qjMcmoWmZlyqO5gYG0RD0o",
  authDomain: "vue-commerce-fe33e.firebaseapp.com",
  projectId: "vue-commerce-fe33e",
  storageBucket: "vue-commerce-fe33e.appspot.com",
  messagingSenderId: "860687140456",
  appId: "1:860687140456:web:89dae3ea655c2aeae05ddd",
};

export default firebase.initializeApp(firebaseConfig);
