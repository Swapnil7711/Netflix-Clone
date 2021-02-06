import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWCKFg54Q9-j0GwgXuXyoKce8nhg12OfQ",
  authDomain: "netflix-clone-v2-377a5.firebaseapp.com",
  projectId: "netflix-clone-v2-377a5",
  storageBucket: "netflix-clone-v2-377a5.appspot.com",
  messagingSenderId: "602397028823",
  appId: "1:602397028823:web:f0ee2d87fc877db0c2db92",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };

export default db;
