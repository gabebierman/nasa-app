import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const AuthRoute = ({ requiresUser, component, user }) => {
    const redirectTo = useMemo(() => (requiresUser ? "/earth" : "/favorites"), [requiresUser]);

    const authorized = useMemo(() => {
        return (!requiresUser && !user) || (requiresUser && user);
    }, [requiresUser, user]);

    if (authorized) {
        return <>{component}</>;
    }

    return <Navigate to={redirectTo} />;
};

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({ user: state.user });

const ConnectedAuthRoute = connect(mapStateToProps, mapDispatchToProps)(AuthRoute);

export const PrivateRoute = ({ component }) => {
    return <ConnectedAuthRoute requiresUser={true} component={component} />;
};

export const PublicRoute = ({ component }) => {
    return <ConnectedAuthRoute requiresUser={false} component={component} />;
};
