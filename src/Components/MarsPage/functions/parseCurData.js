import React from "react";

function parseCurData(curData) {
    console.log(curData);
    let curPic = [];
    const getCurCam = (curData) => {
        let curMast = curData.find((e) => e.cam === "Mast Camera");
        curPic.push(curMast);
        let curNav = curData.find((e) => e.cam === "Navigation Camera");
        curPic.push(curNav);
        curPic.filter((v) => v !== undefined);
    };
    getCurCam(curData);
    // console.log(curPic);

    return curPic;
}

export default parseCurData;
