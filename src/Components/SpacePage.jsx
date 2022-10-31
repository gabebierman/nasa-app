import React from "react";
import APODDisplay from "../shared/components/APODDisplay";
import { useGetAPODQuery } from "../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

function SpacePage() {
    const date = useSelector((state) => state.date);
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
    } = useGetAPODQuery(`${date}`);
    const APODarray = [APODdata];
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SpacePage);
