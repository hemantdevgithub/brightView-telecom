import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./features/authSlice";
import customerProfileReducers from "./features/customerProfileSlice";
import profileReducers from "./features/profileSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducers,
        profile: profileReducers,
        customerProfile: customerProfileReducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: true,
});

export default store;
