import React from "react";

function parsePerData(perData) {
    let perPic = [];
    const getPerCam = (perData) => {
        let perNavL = perData.find((e) => e.cam === "Navigation Camera - Left");
        perPic.push(perNavL);

        let perNavR = perData.find((e) => e.cam === "Navigation Camera - Right");
        perPic.push(perNavR);

        let perMastL = perData.find((e) => e.cam === "Mast Camera Zoom - Left");
        perPic.push(perMastL);

        let perMastR = perData.find((e) => e.cam === "Mast Camera Zoom - Right");
        perPic.push(perMastR);

        let perRearR = perData.find((e) => e.cam === "Rear Hazard Avoidance Camera - Right");
        perPic.push(perRearR);

        let perRearL = perData.find((e) => e.cam === "Rear Hazard Avoidance Camera - Left");
        perPic.push(perRearL);
    };
    getPerCam(perData);
    perPic = perPic.filter((e) => e !== undefined);
    return perPic;
}

export default parsePerData;
