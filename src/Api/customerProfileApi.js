import { axiosPrivate } from "./axios";

export const updateCustomerProfile = async ({ data, userId }) => {
    try {
        const response = await axiosPrivate.patch("/customers/profile", {
            userId,
            ...data,
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const getCustomerProfile = async () => {
    try {
        const response = await axiosPrivate.get("/customers/profile");
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const uploadCustomerProfilePhoto = async (data) => {
    try {
        const response = await axiosPrivate.patch(
            "/customers/photo",
            { ...data },
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
