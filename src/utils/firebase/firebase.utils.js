import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore'

import { async } from '@firebase/util';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo1TP3KuHK4HDkfA4y3K9EPW_A9xyxwrw",
  authDomain: "e-commerse-db-84db1.firebaseapp.com",
  projectId: "e-commerse-db-84db1",
  storageBucket: "e-commerse-db-84db1.appspot.com",
  messagingSenderId: "746008262766",
  appId: "1:746008262766:web:9c92a2f3243ac002088e7f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef
}
