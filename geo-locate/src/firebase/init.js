import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAdapl-BnKVDu6JkKEieEzl648qeOVy7cM",
    authDomain: "geo-locate-28a71.firebaseapp.com",
    databaseURL: "https://geo-locate-28a71.firebaseio.com",
    projectId: "geo-locate-28a71",
    storageBucket: "",
    messagingSenderId: "561784700129",
    appId: "1:561784700129:web:aff94d3f75a0f5901a8ba0",
    measurementId: "G-4VG734SQJ9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()