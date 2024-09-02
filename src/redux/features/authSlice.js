import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        loginFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.error = null;
        },
        logout(state) {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
        logoutFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, logoutFailure } =
    authSlice.actions;

export default authSlice.reducer;
