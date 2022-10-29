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
    return (
        <>
            <div>
                {" "}
                Mars Curiosity Display
                {curError && <p>curiostiy error</p>}
                {curSuccess &&
                    curData.map((val) => (
                        <MarsCuriosityDisplay key={val.id} cam_name={val.cam} link={val.img} />
                    ))}
            </div>
            <MarsPerseveranceDisplay />
            <InsightDisplay />
        </>
    );
}

export default MarsPage;
