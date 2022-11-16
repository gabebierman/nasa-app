import styled from "@emotion/styled";

export const FlexContainerCol = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "5px",
    "&>*": {
        flexBasis: getBasis(props),
    },
    "@media(min-width: 500px)": {
        "&>*": {
            flexBasis: getBasis(props, "sm"),
        },
    },
    "& button": {
        marginTop: "auto",
    },
    "@media(min-width: 750px)": {
        "&>*": {
            flexBasis: getBasis(props, "md"),
        },
    },
    "@media(min-width: 900px)": {
        "&>*": {
            flexBasis: getBasis(props, "lg"),
        },
    },
    alignItems: "center",
}));

function getBasis(props, size) {
    const prefix = size ? `${size}-` : "";
    if (props[`${prefix}third`]) return "calc(100% / 3 - 10px)";
    if (props[`${prefix}quarter`]) return "calc(25% - 10px)";
    if (props[`${prefix}half`]) return "calc(50% - 10px)";
    if (props[`${prefix}full`]) return "calc(100% - 10px)";
}
