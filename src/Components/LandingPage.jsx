import React, { useState } from "react";
import {
    setDateDay,
    setDate,
    setDateMonth,
    setDateYear,
} from "../shared/redux/slices/dateSlice";
import { connect } from "react-redux";

function LandingPage({ setDate, setDateYear }) {
    const [dateDay, setDateDay] = useState("");
    const [dateMonth, setDateMonth] = useState("");
    // const [dateYear, setDateYear] = useState("");

    return (
        <>
            <div>Enter your birth day and month</div>
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
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setDate: (dateAll) => dispatch(setDate(dateAll)),
    setDateDay: (dateDay) => dispatch(setDateDay(dateDay)),
    setDateMonth: (dateMonth) => dispatch(setDateMonth(dateMonth)),
    setDateYear: (dateYear) => dispatch(setDateYear(dateYear)),
});

const mapStateToProps = (state) => ({
    date: state.date,
    dateDay: state.dateDay,
    dateMonth: state.dateMonth,
    dateYear: state.dateYear,
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
