
import { initializeApp } from "firebase/app";
import {
     getAuth,
      signInWithRedirect ,
      signInWithPopup , 
      GoogleAuthProvider
    } from 'firebase/auth';

//  firebase firestore (later added)
    import {getFirestore, doc,  getDoc , setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD85dLzc1aYjtQLb4JYpbBr7HFNhEs6KH4",
  authDomain: "e-com-672bc.firebaseapp.com",
  projectId: "e-com-672bc",
  storageBucket: "e-com-672bc.appspot.com",
  messagingSenderId: "835847047605",
  appId: "1:835847047605:web:9e197dc9dba5442628b1fc"
};


const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth , provider);     


// database

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users' , userAuth.uid);


    const userSnapShot = await getDoc(userDocRef); 
   

    // if user data doesnt exists

    if(!userSnapShot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
    
    try{

    await setDoc(userDocRef, { 
        displayName,
        email,
        createdAt,
    });
    }catch(error){

        console.log("error creating the user", error.message);

    }
    }
    // return userDocref

    return userDocRef;
}
