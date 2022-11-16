import styled from "@emotion/styled";

export const EONETFlex = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "5px",
    flexBasis: "(100% / 3)",
    alignItems: "center",
    padding: "3%",
    background: props.theme.colors.primary,
    color: "white",
    borderColor: "black",
    borderWidth: "1px",
    borderRadius: "10px",
}));
