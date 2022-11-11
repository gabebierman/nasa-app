import React from "react";

function parsePerData(perData) {
    let perPic = [];
    const getPerCam = (perData) => {
        let perNavL = perData.find((e) => e.cam === "Navigation Camera - Left");
        let perNavR = perData.find((e) => e.cam === "Navigation Camera - Right");
        let perMastL = perData.find((e) => e.cam === "Mast Camera Zoom - Left");
        let perMastR = perData.find((e) => e.cam === "Mast Camera Zoom - Right");
        let perRearL = perData.find((e) => e.cam === "Rear Hazard Avoidance Camera - Right");
        let perRearR = perData.find((e) => e.cam === "Rear Hazard Avoidance Camera - Left");
        perPic.push(perNavL);
        perPic.push(perNavR);
        perPic.push(perMastL);
        perPic.push(perMastR);
        perPic.push(perRearL);
        perPic.push(perRearR);
        perPic.filter((v) => v.cam === undefined);
    };
    getPerCam(perData);
    // console.log(perPic);

    return perPic;
}

export default parsePerData;
