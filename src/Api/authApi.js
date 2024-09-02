import axios, { axiosPrivate } from "./axios";

export const registerUser = async ({ data }) => {
    try {
        const response = await axios.post(
            "users/register",
            { ...data },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const response = await axiosPrivate.post("/users/login", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const logoutUser = async () => {
    try {
        const response = await axiosPrivate.post("/users/logout");
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const getCurrentUser = async () => {
    try {
        const response = await axiosPrivate.post("/users/current-user");
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const refreshToken = async ({ refreshToken }) => {
    try {
        const response = await axios.post(
            `${API_URL}/users/refresh`,
            JSON.stringify({ refreshToken })
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
