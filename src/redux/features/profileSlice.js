import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    isLoading: false,
    error: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        startFetchingProfile: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        successFetchingProfile: (state, action) => {
            state.profile = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        failureFetchingProfile: (state, action) => {
            state.profile = null;
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    failureFetchingProfile,
    startFetchingProfile,
    successFetchingProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
