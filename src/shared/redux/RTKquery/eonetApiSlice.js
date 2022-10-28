import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eonetApiSlice = createApi({
    reducerPath: "eonetApiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://eonet.gsfc.nasa.gov/api/v3" }),
    endpoints: (builder) => ({
        getEarthEventData: builder.query({
            query: (date) => `events?start=${date}&end=${date}&status=all`,
            transformResponse: (response) => {
                return response.events.map((response) => ({
                    event_id: response.id,
                    event_title: response.title,
                    event_link: response.sources[0].url,
                    event_type: response.categories[0].title,
                }));
            },
        }),
    }),
});

export const { useGetEarthEventDataQuery } = eonetApiSlice;
