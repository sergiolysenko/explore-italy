import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIVAGMFRIOs9SJO8MxvTsV_Oqte51nQnk",
  authDomain: "explore-italy.firebaseapp.com",
  projectId: "explore-italy",
  storageBucket: "explore-italy.appspot.com",
  messagingSenderId: "423083804499",
  appId: "1:423083804499:web:8f843ecde634b66ec2c3a6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
