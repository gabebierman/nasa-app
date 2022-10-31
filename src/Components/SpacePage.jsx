import React from "react";
import APODDisplay from "../shared/components/APODDisplay";
// import ExoPlanetDisplay from "../shared/components/ExoPlanetDisplay";
// import { useGetExoPlanetQuery } from "../shared/redux/RTKquery/exoplanetApiSlice";
import { useGetAPODQuery } from "../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

function SpacePage() {
    const date = useSelector((state) => state.date);
    const dateDay = useSelector((state) => state.dateDay);
    const dateMonth = useSelector((state) => state.dateMonth);
    const dateYear = useSelector((state) => state.dateYear);
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
    } = useGetAPODQuery(`${date}`);
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

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    date: state.date,
    dateDay: state.dateDay,
    dateMonth: state.dateMonth,
    dateYear: state.dateYear,
});

export default connect(mapStateToProps, mapDispatchToProps)(SpacePage);
