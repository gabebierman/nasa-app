import React from "react";
import { auth } from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

function SignInPage() {
    async function signIn() {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
        } catch (error) {}
    }
    return <div></div>;
}

export default SignInPage;
