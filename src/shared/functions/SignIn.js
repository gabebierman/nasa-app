import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";

const provider = new GoogleAuthProvider();

export default async function signIn() {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        auth.onAuthStateChanged((activeUser) => setUser(activeUser));
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
