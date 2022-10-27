import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eonetApiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: "https://eonet.gsfc.nasa.gov/api/v3" }),

})

export const { useGetPostsQuery } = eonetApiSlice