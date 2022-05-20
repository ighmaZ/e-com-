import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utilities/firebase/Firebase'
import React from 'react'

 const SignIn = () => {
     const logGoogleUser = async () =>  {
         const {user} = await signInWithGooglePopup();
         const userDocRef = await createUserDocumentFromAuth(user);
     }
  return (
    <div>
        <h1>hey this is sign in</h1>
        <button onClick={logGoogleUser}> sign in </button>
        </div>
  )
}

export default SignIn;