import React from "react";

function parseCurData(curData) {
    let curPic = [];
    const getCurCam = (curData) => {
        let curMast = curData.find((e) => e.cam === "Mast Camera");
        curPic.push(curMast);
        let curNav = curData.find((e) => e.cam === "Navigation Camera");
        curPic.push(curNav);
    };
    getCurCam(curData);
    curPic = curPic.filter((e) => e !== undefined);
    return curPic;
}

export default parseCurData;
