import React, { useState } from "react";
import {
    setDateDay,
    setDate,
    setDateMonth,
    setDateYear,
} from "../shared/redux/slices/dateSlice";
import { connect } from "react-redux";
import { FlexContainer } from "../shared/styled/FlexContainer";
import { H4 } from "../shared/styled/Headers";
import moment from "moment";

function LandingPage({ setDate, setDateYear }) {
    console.log(moment(String).format());
    const [dateDay, setDateDay] = useState("");
    const [dateMonth, setDateMonth] = useState("");

    return (
        <>
            <H4>Enter your birth day and month</H4>
            <FlexContainer style={{ justifyContent: "center" }}>
                <select
                    id="month"
                    value={dateMonth}
                    onChange={(e) => setDateMonth(e.target.value)}
                >
                    Month
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <input
                    placeholder="Day"
                    id="day"
                    value={dateDay}
                    onChange={(e) => setDateDay(e.target.value)}
                ></input>
                <button
                    disabled={dateDay.length === 0}
                    onClick={() => setDate(`2021-${dateMonth}-${dateDay}`)}
                >
                    Search
                </button>
            </FlexContainer>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setDate: (dateAll) => dispatch(setDate(dateAll)),
});

const mapStateToProps = (state) => ({
    date: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
