import { axiosPrivate } from "./axios";

export const getSolutionPartnerProfessionalProfile = async () => {
    try {
        const response = await axiosPrivate.get(
            "/solution-partner-professionals/profile"
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const updateProfessionalProfile = async ({ data }) => {
    try {
        const response = await axiosPrivate.patch(
            "/solution-partner-professionals/profile",
            {
                ...data,
            }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const uploadSolutionPartnerProfilePhoto = async (data) => {
    try {
        const response = await axiosPrivate.patch(
            "/solution-partner-professionals/user-image",
            { ...data },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const deleteProfessionalProfileEducation = async (educationId) => {
    try {
        const response = await axiosPrivate.delete(
            `/solution-partner-professionals/education?educationId`,
            { data: { educationId } }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const deleteProfessionalProfileWorkExperience = async (
    workExperienceId
) => {
    try {
        const response = await axiosPrivate.delete(
            `/solution-partner-professionals/workExperience`,
            { data: { workExperienceId } }
        );
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
