import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { conductorApi } from "./services/conductorApi";

export const store = configureStore({
    reducer: {
        [conductorApi.reducerPath]: conductorApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(conductorApi.middleware)
})

setupListeners(store.dispatch)