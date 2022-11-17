import React from "react";
import { H6 } from "../styled/Headers";

function Footer() {
    return (
        <div
            style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "",
                bottom: "0",
                left: "0",
                width: "100%",
            }}
        >
            <H6>
                All information displayed on this page is provided by{" "}
                <a href="https://api.nasa.gov/">NASA</a> and their open APIs
            </H6>
        </div>
    );
}

export default Footer;
