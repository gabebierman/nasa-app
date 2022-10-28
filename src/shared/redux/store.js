import { configureStore } from "@reduxjs/toolkit";
// import { earthEventReducer } from "./slices/earthEventSearchSlice";
// import { earthPictureDataReducer } from "./slices/earthPictureDataSlice";
import { eonetApiSlice } from "./RTKquery/eonetApiSlice";
import { nasaApiSlice } from "./RTKquery/nasaApiSlice";

export default configureStore({
    reducer: {
        // earthEvent: earthEventReducer,
        // earthPictureData: earthPictureDataReducer,
        [eonetApiSlice.reducerPath]: eonetApiSlice.reducer,
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eonetApiSlice.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nasaApiSlice.middleware),
});
