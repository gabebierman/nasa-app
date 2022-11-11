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
import moment from "moment";
import parseCurData from "./functions/parseCurData";
import parsePerData from "./functions/parsePerData";

function MarsPage() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/landing";
        navigate(path);
    };
    const date = useSelector((state) => state.date);
    console.log(date);
    const { data: curData, error: curError } = useGetMarsImageCuriosityQuery(`${date}`);
    console.log(curData);
    const curPic = parseCurData(curData);
    console.log(curPic);
    const { data: perData, error: perError } = useGetMarsImagePerseveranceQuery(`${date}`);
    const perPic = parsePerData(perData);
    // console.log(curPic);
    // console.log(perPic);

    return (
        <>
            <div>
                {curError && <H1>UH OH</H1>}
                {curError && routeChange()}
                <H3>Pictures from Curiostiy on {moment(date).format("MM-DD-YYYY")}</H3>
                {curPic.length > 1 &&
                    curPic.map((val) => (
                        <MarsCuriosityDisplay key={val.id} cam_name={val.cam} link={val.img} />
                    ))}
                {/* {perError && <H1>UH OH</H1>}
                {perError && routeChange()}
                <H3>Pictures from Perserverance on {moment(date).format("MM-DD-YYYY")}</H3>
                {perPic.length > 1 &&
                    perPic.map((val) => (
                        <MarsPerseveranceDisplay
                            key={val.id}
                            cam_name={val.cam}
                            link={val.img}
                        />
                    ))} */}
            </div>
        </>
    );
}
const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    date: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsPage);
