import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    isLoading: false,
    error: null,
};

const customerProfileSlice = createSlice({
    name: "customerProfile",
    initialState,
    reducers: {
        startFetchingCustomerProfile: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        successFetchingCustomerProfile: (state, action) => {
            state.profile = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        failureFetchingCustomerProfile: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.profile = null;
        },
    },
});

export const {
    startFetchingCustomerProfile,
    failureFetchingCustomerProfile,
    successFetchingCustomerProfile,
} = customerProfileSlice.actions;

export default customerProfileSlice.reducer;