import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
    date: "date",
    InitialState: null,
    reducers: {
        setDate: (state, action) => action.payload,
        clearDate: () => null,
    },
});

export const { setDate, clearDate } = dateSlice.actions;
export default dateSlice.reducer;
