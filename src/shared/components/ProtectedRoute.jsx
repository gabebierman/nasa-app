import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ requiresDate, component, date }) => {
    const redirectTo = useMemo(() => (requiresDate ? "/landing" : "/earth"), [requiresDate]);

    const authorized = useMemo(() => {
        return (!requiresDate && !date) || (requiresDate && date);
    }, [requiresDate, date]);

    if (authorized) {
        return <>{component}</>;
    }

    return <Navigate to={redirectTo} />;
};

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({ date: state.date });

const ConnectedAuthRoute = connect(mapStateToProps, mapDispatchToProps)(AuthRoute);

export const PrivateRoute = ({ component }) => {
    return <ConnectedAuthRoute requiresDate={true} component={component} />;
};

export const PublicRoute = ({ component }) => {
    return <ConnectedAuthRoute requiresDate={false} component={component} />;
};
