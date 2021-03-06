import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth , additionalinformation={}) => {
  if(!userAuth)return
  
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalinformation
      })
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef
}

export const creatAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password)return;
  return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser = async ()=> await signOut(auth)
export const onAuthStateChangedListener =(callback)=>onAuthStateChanged(auth,callback)