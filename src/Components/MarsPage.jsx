import React from "react";
import MarsCuriosityDisplay from "../shared/components/MarsCuriosityDisplay";
import MarsPerseveranceDisplay from "../shared/components/MarsPerseveranceDisplay";
import InsightDisplay from "../shared/components/MarsWeatherDisplay";
import {
    useGetMarsImageCuriosityQuery,
    use,
    useGetMarsImagePerseveranceQuery,
} from "../shared/redux/RTKquery/nasaApiSlice";

function MarsPage() {
    const {
        data: curData,
        error: curError,
        isSuccess: curSuccess,
    } = useGetMarsImageCuriosityQuery("2022-02-22");

    const {
        data: perData,
        error: perError,
        isSuccess: perSuccess,
    } = useGetMarsImagePerseveranceQuery("2022-02-22");
    console.log(perData);
    console.log(curData);

    let curPic = [];
    let perPic = [];

    const getCurCam = () => {
        let curMast = curData.find((e) => e.cam === "Mast Camera");
        curPic.push(curMast);
        let curNav = curData.find((e) => e.cam === "Navigation Camera");
        curPic.push(curNav);
    };

    const getPerCam = () => {
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
    };

    return (
        <>
            <div>
                {" "}
                Mars Curiosity Display
                {curError && <p>curiostiy error</p>}
                {curSuccess && getCurCam()}
                {curSuccess &&
                    curPic.map((val) => (
                        <MarsCuriosityDisplay key={val.id} cam_name={val.cam} link={val.img} />
                    ))}
                {perSuccess && getPerCam()}
                {curSuccess &&
                    perPic.map((val) => (
                        <MarsPerseveranceDisplay
                            key={val.id}
                            cam_name={val.cam}
                            link={val.img}
                        />
                    ))}
            </div>
            <InsightDisplay />
        </>
    );
}

export default MarsPage;
