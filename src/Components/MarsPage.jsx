import React from "react";
import MarsCuriosityDisplay from "../shared/components/MarsCuriosityDisplay";
import MarsPerseveranceDisplay from "../shared/components/MarsPerseveranceDisplay";
import InsightDisplay from "../shared/components/MarsWeatherDisplay";
import {
    useGetMarsImageCuriosityQuery,
    useGetMarsImagePerseveranceQuery,
} from "../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

function MarsPage() {
    const date = useSelector((state) => state.date);
    const {
        data: curData,
        error: curError,
        isSuccess: curSuccess,
    } = useGetMarsImageCuriosityQuery(`${date}`);

    const {
        data: perData,
        error: perError,
        isSuccess: perSuccess,
    } = useGetMarsImagePerseveranceQuery(`${date}`);
    console.log(curData);
    console.log(perData);

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
                {curError && <p>curiostiy error</p>}
                {curSuccess && getCurCam()}
                {curPic.length > 0 && <p>Pictures from Curiostiy on {date}</p>}
                {curPic.length > 1 &&
                    curPic.map((val) => (
                        <MarsCuriosityDisplay key={val.id} cam_name={val.cam} link={val.img} />
                    ))}
                {perSuccess && getPerCam()}
                {perPic.length > 0 && <p>Pictures from Perserverance on {date}</p>}
                {perPic.length > 0 &&
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
const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    date: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsPage);
