import React from 'react'

import {
     signInWithGooglePopup,
     createUserDocumentFromAuth,
 } from '../../utilities/firebase/Firebase';

import SignUp from '../../components/sign-up/sign-up';



 const SignIn = () => {

     const logGoogleUser = async () =>  {
         const {user} = await signInWithGooglePopup();
         const userDocRef = await createUserDocumentFromAuth(user);
     };
 
  return (
    <div>
        <h1>hey this is sign in</h1>
        <button onClick={logGoogleUser}> sign in </button>
        < SignUp/>
        </div>
  )
}

export default SignIn;