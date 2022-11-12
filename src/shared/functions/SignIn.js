import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";

const provider = new GoogleAuthProvider();

async function signIn({ setUser }) {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        setUser(user);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
});

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(signIn);
