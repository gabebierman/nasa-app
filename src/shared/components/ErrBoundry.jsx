import React from "react";
import { H1 } from "../styled/Headers";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <H1>Something went wrong.</H1>;
        }

        return this.props.children;
    }
}
