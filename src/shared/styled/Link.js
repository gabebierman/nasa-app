import styled from "@emotion/styled";

export const Link = styled.a((props) => ({
    color: props.theme.colors.accent,
    "&:hover": {
        color: props.theme.colors.hover[props.variant ?? "tertiary"],
    },
}));
