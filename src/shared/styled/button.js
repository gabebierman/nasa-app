import styled from "@emotion/styled";

export const Button = styled.button((props) => ({
    color: "white",
    backgroundColor: props.theme.colors[props.variant ?? "primary"],
    borderColor: "black",
    borderWidth: "1px",
    borderRadius: "5px",
    verticalAlign: "middle",
    maxWidth: "100px",
    "&:hover": {
        backgroundColor: props.theme.colors.hover[props.variant ?? "secondary"],
    },
}));
