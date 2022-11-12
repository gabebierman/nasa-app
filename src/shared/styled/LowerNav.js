import styled from "@emotion/styled";

export const LowerNav = styled("nav")((props) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: props.theme.colors.primary,
    color: "white",
    padding: "5px",
}));
