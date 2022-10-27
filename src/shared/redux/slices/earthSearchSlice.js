import { createSlice } from "@reduxjs/toolkit";

export const earthSearchSlice = createSlice({
    name: "earthSearch",
    initialState: [],
    reducers: {
        setSearch: (state, action) => action.payload,
        clearSearch: () => [],
    },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
