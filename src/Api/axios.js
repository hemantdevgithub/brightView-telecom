import axios from "axios";

const BASE_URL =
    import.meta.env.VITE_NODE_ENV === "production"
        ? `${import.meta.env.VITE_API_DOMAIN_PRODUCTION_URL}/api/v1`
        : `${import.meta.env.VITE_API_DOMAIN_DEVELOPMENT_URL}/api/v1`;

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
