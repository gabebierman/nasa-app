import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eonetApiSlice = createApi({
    reducerPath: "eonetApiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://eonet.gsfc.nasa.gov/api/v3" }),
    endpoints: (builder) => ({
        getEarthEventData: builder.query({
            query: (date) => `events?start=${date}&end=${date}&status=all`,
        }),
    }),
});
export const { useGetEarthEventDataQuery } = eonetApiSlice;
