import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { eonetApiSlice } from "./RTKquery/eonetApiSlice";
import { exoplanetApiSlice } from "./RTKquery/exoplanetApiSlice";
import { nasaApiSlice } from "./RTKquery/nasaApiSlice";

export const store = configureStore({
    reducer: {
        // [taskApi.reducerPath]: taskApi.reducer, //! for each of the api slices
        [eonetApiSlice.reducerPath]: eonetApiSlice.reducer,
        [exoplanetApiSlice.reducerPath]: exoplanetApiSlice.reducer,
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware), //! for each of the api calls
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eonetApiSlice.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(exoplanetApiSlice.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nasaApiSlice.middleware),
});

setupListeners(store.dispatch);
