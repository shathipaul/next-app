'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const counterApi = createApi({
    reducerPath: 'counterApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: (builder) => ({
        getCounter: builder.query({
            query: '/products'
        }),

    })
});

export const { useGetCounterQuery } = counterApi;