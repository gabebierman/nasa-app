import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eonetApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://eonet.gsfc.nasa.gov/api/v3" }),
    endpoints: (builder) => ({
        getEarthEventData: builder.query({
            query: (startDate, endDate) =>
                `events?start=${startDate}&end=${endDate}&status=all`,
            // transformResponse: (events , ) => response.data,
        }),
    }),
});
export const { useGetEarthEventDataQuery } = eonetApiSlice;
