import React from "react";
import APODDisplay from "../shared/components/APODDisplay";
import ExoPlanetDisplay from "../shared/components/ExoPlanetDisplay";
import { useGetExoPlanetQuery } from "../shared/redux/RTKquery/exoplanetApiSlice";
import { useGetAPODQuery } from "../shared/redux/RTKquery/nasaApiSlice";

function SpacePage() {
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
    } = useGetAPODQuery("2022-02-22");
    // const {
    //     data: EPdata,
    //     error: EPerror,
    //     isSuccess: EPsuccess,
    //     isError,
    // } = useGetExoPlanetQuery("2022-02-22");
    // console.log(APODdata);
    // console.log(EPdata);
    // console.log(isError);
    return (
        <>
            <h3>SpacePage</h3>
            <APODDisplay
                explanation={APODdata.explanation}
                title={APODdata.title}
                url={APODdata.url}
            />
        </>
    );
}

export default SpacePage;
