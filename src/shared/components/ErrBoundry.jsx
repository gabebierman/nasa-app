import React from "react";
import { FlexContainer } from "../styled/FlexContainer";
import { H1, H2 } from "../styled/Headers";
import { Img } from "../styled/Img";

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
            return (
                <>
                    <H1>Something went wrong, probably on the Mars page.</H1>
                    <H2>I'll send you back to the landing page so we can try again.</H2>
                    <FlexContainer>
                        <Img src="https://http.cat/500"></Img>
                    </FlexContainer>
                </>
            );
        }

        return this.props.children;
    }
}
