import React from "react";
import APODDisplay from "../shared/components/APODDisplay";
import CMEDisplay from "../shared/components/CMEDisplay";
import ExoPlanetDisplay from "../shared/components/ExoPlanetDisplay";
import SolarFlareDisplay from "../shared/components/SolarFlareDisplay";
import { useGetAPODQuery, useGetCMEQuery } from "../shared/redux/RTKquery/nasaApiSlice";
import { useGetSolarFlareQuery } from "../shared/redux/RTKquery/solarFlareApiSlice";

function SpacePage() {
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
    } = useGetAPODQuery("2022-02-22");
    const {
        data: CMEdata,
        error: CMEerror,
        isSuccess: CMEsuccess,
    } = useGetCMEQuery("2022-02-22");

    const {
        data: SFdata,
        error: SFerror,
        isSuccess: SFsuccess,
    } = useGetSolarFlareQuery("2022-02-20");

    console.log(APODdata);
    console.log(CMEdata);
    console.log(SFdata);
    return (
        <>
            <h3>SpacePage</h3>
            <APODDisplay />
            <CMEDisplay />
            <SolarFlareDisplay />
            <ExoPlanetDisplay />
        </>
    );
}

export default SpacePage;
