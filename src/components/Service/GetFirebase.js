import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6wphg3rG0pnaVKVT7OKIgmin1AsRc8DA",
  authDomain: "landing-35f49.firebaseapp.com",
  projectId: "landing-35f49",
  storageBucket: "landing-35f49.appspot.com",
  messagingSenderId: "238403723286",
  appId: "1:238403723286:web:962561ebc3c0a825251537"
};

const app = firebase.initializeApp(firebaseConfig);




  export function getFirestore() {
      return firebase.firestore(app)
  }

  export const auth=firebase.auth()
  export const google_provider= new firebase.auth.GoogleAuthProvider()
  export const facebook_provider= new firebase.auth.FacebookAuthProvider()
