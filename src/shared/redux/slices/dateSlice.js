import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const dateSlice = createSlice({
    name: "date",
    initialState: moment().subtract(2, "days").format("YYYY-MM-DD"),
    reducers: {
        setDate: (state, action) => action.payload,
        setDateDay: (state, action) => action.payload,
        setDateMonth: (state, action) => action.payload,
        setDateYear: (state, action) => action.payload,
        clearDate: () => new Date().toJSON().slice(0, 10),
    },
});

export const { setDate, clearDate, setDateDay, setDateMonth, setDateYear } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
