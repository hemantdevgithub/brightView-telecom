import { axiosPrivate } from "./axios";

export const updateInstitutionProfile = async ({ data }) => {
    try {
        const response = await axiosPrivate.patch(
            "/solution-partner-institutions/profile",
            { ...data }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const getInstitutionProfile = async () => {
    try {
        const response = await axiosPrivate.get(
            "/solution-partner-institutions/profile"
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const uploadInstitutionsProfilePhoto = async (data) => {
    try {
        const response = await axiosPrivate.patch(
            "/solution-partner-institutions/photo",
            { ...data },
            { headers: { "Content-Type": "multipart/form-data" } }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
