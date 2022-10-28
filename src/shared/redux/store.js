import { configureStore } from "@reduxjs/toolkit";
// import { earthEventReducer } from "./slices/earthEventSearchSlice";
// import { earthPictureDataReducer } from "./slices/earthPictureDataSlice";
import { eonetApiSlice } from "./RTKquery/eonetApiSlice";
import { nasaApiSlice } from "./RTKquery/nasaApiSlice";
import { earthPictureReducer } from "./slices/earthPictureSlice";

export default configureStore({
    reducer: {
        earthPicture: earthPictureReducer,
        [eonetApiSlice.reducerPath]: eonetApiSlice.reducer,
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eonetApiSlice.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nasaApiSlice.middleware),
});
