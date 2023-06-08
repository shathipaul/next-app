'use client';

import { configureStore } from "@reduxjs/toolkit";
import { counterApi } from "./Features/counter/counterSlice";



const store = configureStore({
    reducer: {
        [counterApi.reducerPath]: counterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(counterApi.middleware)
});

export default store;