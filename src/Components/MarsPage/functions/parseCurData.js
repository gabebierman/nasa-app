import React from "react";

export default function parseCurData(curData) {
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

export function curTest(curData) {
    const curMastArr = [];
    const curNavArr = [];
    const ranMast = [];
    const ranNav = [];

    for (let i = 0; i < curData.length; i++) {
        let mastTemp = curData.find((e) => e.cam === "Mast Camera");
        curMastArr.push(mastTemp);
        Math.floor(Math.random() * curMastArr.length);
        return ranMast;
    }

    for (let i = 0; i < curData.length; i++) {
        let navTemp = curData.find((e) => e.cam === "Navigation Camera");
        curNavArr.push(navTemp);
        let random = Math.floor(Math.random() * curNavArr.length);
        ranNav.push(random);
    }
}
