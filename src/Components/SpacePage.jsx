import React from "react";
import APODDisplay from "../shared/components/APODDisplay";
// import ExoPlanetDisplay from "../shared/components/ExoPlanetDisplay";
// import { useGetExoPlanetQuery } from "../shared/redux/RTKquery/exoplanetApiSlice";
import { useGetAPODQuery } from "../shared/redux/RTKquery/nasaApiSlice";

function SpacePage() {
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
    } = useGetAPODQuery("2022-02-22");
    const APODarray = [APODdata];
    // const {
    //     data: EPdata,
    //     error: EPerror,
    //     isSuccess: EPsuccess,
    //     isError,
    // } = useGetExoPlanetQuery("2022-02-22");
    // console.log(APODdata);
    return (
        <>
            <h3>SpacePage</h3>
            {APODdata &&
                APODarray.map((e) => (
                    <APODDisplay
                        key={e.date}
                        explanation={e.explanation}
                        title={e.title}
                        url={e.url}
                    />
                ))}
        </>
    );
}

export default SpacePage;
