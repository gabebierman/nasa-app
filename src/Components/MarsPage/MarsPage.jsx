import React from "react";
import MarsCuriosityDisplay from "./components/MarsCuriosityDisplay";
import MarsPerseveranceDisplay from "./components/MarsPerseveranceDisplay";
import {
    useGetMarsImageCuriosityQuery,
    useGetMarsImagePerseveranceQuery,
} from "../../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { H1, H3 } from "../../shared/styled/Headers";
import { useNavigate } from "react-router-dom";

function MarsPage() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/landing";
        navigate(path);
    };
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
    // console.log(curData);
    // console.log(perData);

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
                {curError && <H1>UH OH</H1>}
                {curError && routeChange()}
                <H3>Pictures from Curiostiy on {date}</H3>
                {curSuccess && getCurCam()}
                {curPic.length > 1 &&
                    curPic.map((val) => (
                        <MarsCuriosityDisplay key={val.id} cam_name={val.cam} link={val.img} />
                    ))}
                {perError && <H1>UH OH</H1>}
                {perError && routeChange()}
                <H3>Pictures from Perserverance on {date}</H3>
                {perSuccess && getPerCam()}
                {perPic.length > 1 &&
                    perPic.map((val) => (
                        <MarsPerseveranceDisplay
                            key={val.id}
                            cam_name={val.cam}
                            link={val.img}
                        />
                    ))}
            </div>
        </>
    );
}
const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    date: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsPage);
