import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import { connect } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function SignIn({ setUser }) {
    let navigate = useNavigate();
    const signinRedirect = () => {
        let path = "/favorites";
        navigate(path);
    };
    async function signIn() {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = auth.currentUser.uid;
            setUser(user);
            console.log(user);
            signinRedirect();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div>sign in </div>
            <button onClick={() => signIn()}>sign in</button>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
});

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
