import React, { useState } from "react";
import { setDateDay, setDate, setDateMonth, setDateYear } from "../redux/slices/dateSlice";
import { connect } from "react-redux";
import { FlexContainer } from "../styled/FlexContainer";
import { H2 } from "../styled/Headers";

function NewDateDisplay({ setDate }) {
    const [dateDay, setDateDay] = useState("");
    const [dateMonth, setDateMonth] = useState("");
    const [dateYear, setDateYear] = useState("");

    return (
        <>
            <H2>Enter a new date to search again</H2>
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
                <select value={dateYear} onChange={(e) => setDateYear(e.target.value)}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                </select>
                <button
                    disabled={dateDay.length === 0}
                    onClick={() => setDate(`${dateYear}-${dateMonth}-${dateDay}`)}
                >
                    Search
                </button>
            </FlexContainer>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDateDisplay);
