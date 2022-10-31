import React from "react";
import MarsCuriosityDisplay from "../shared/components/MarsCuriosityDisplay";
import MarsPerseveranceDisplay from "../shared/components/MarsPerseveranceDisplay";
import InsightDisplay from "../shared/components/MarsWeatherDisplay";
import {
    useGetMarsImageCuriosityQuery,
    use,
    useGetMarsImagePerseveranceQuery,
} from "../shared/redux/RTKquery/nasaApiSlice";
import { date } from "../shared/redux/store";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

function MarsPage() {
    const date = useSelector((state) => state.date);
    const dateDay = useSelector((state) => state.dateDay);
    const dateMonth = useSelector((state) => state.dateMonth);
    const dateYear = useSelector((state) => state.dateYear);
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
                {curError && <p>curiostiy error</p>}
                {curSuccess && getCurCam()}
                {curData.length > 0 && <p>Pictures from Curiostiy on {date}</p>}
                {curData.length > 0 &&
                    curPic.map((val) => (
                        <MarsCuriosityDisplay key={val.id} cam_name={val.cam} link={val.img} />
                    ))}
                {perSuccess && getPerCam()}
                {perData.length > 0 && <p>Pictures from Perserverance on {date}</p>}
                {perData.length > 0 &&
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
    dateDay: state.dateDay,
    dateMonth: state.dateMonth,
    dateYear: state.dateYear,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsPage);
