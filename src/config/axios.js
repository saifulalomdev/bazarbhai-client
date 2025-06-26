import axios from "axios";

const bazarBhaiApi = axios.create({
    baseURL: import.meta.env.VITE_BAZAR_BHAI_API_URL,
    headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token")

    }

})

bazarBhaiApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.token = token;
    }
    return config;
});


export default bazarBhaiApi