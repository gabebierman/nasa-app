// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FlexContainer } from "../styled/FlexContainer";
// import { H1, H2 } from "../styled/Headers";
// import { Img } from "../styled/Img";
// import { MenuLink } from "../styled/NavLink";

// export default class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     render() {
//         if (this.state.hasError) {
//             return (
//                 <>
//                     <H1>Something went wrong, probably on the Mars page.</H1>
//                     <H2>Try picking a new date</H2>
//                     <FlexContainer style={{ flexDirection: "column", textAlign: "center" }}>
//                         <Img src="https://http.cat/500"></Img>
//                     </FlexContainer>
//                 </>
//             );
//         }

//         return this.props.children;
//     }
// }
