import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import { connect } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { FlexContainerCol } from "../styled/FlexContainerCol";
import { H2, H4 } from "../styled/Headers";
import { Button } from "../styled/button";
import { SignInLink } from "../styled/signInLink";

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
        <FlexContainerCol>
            <H2>
                <SignInLink onClick={() => signIn()}>
                    Sign in with Google to view and save favorites
                </SignInLink>
            </H2>
            {/* <Button onClick={() => signIn()}>sign in</Button> */}
        </FlexContainerCol>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
});

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
