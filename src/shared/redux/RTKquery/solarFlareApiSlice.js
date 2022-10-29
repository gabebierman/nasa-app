import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const solarFlareApiSlice = createApi({
    reducerPath: "solarFlareApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/",
        mode: "cors",
    }),
    endpoints: (builder) => ({
        getSolarFlare: builder.query({
            query: (date) => `FLR?startDate=${date}&endDate=${date}`,
            // transformResponse: (response) => {
            //     return response.map((response) => ({
            //         id: response.flrID,
            //         class: response.classType,
            //         link: response.link,
            //     }));
            // },
        }),
    }),
});

export const { useGetSolarFlareQuery } = solarFlareApiSlice;
