import axios from "axios";

// Use the URL that works in Postman
const baseApiUrl = "http://127.0.0.1:8000/api/";
const baseUrl = "http://127.0.0.1:8000/";

export { baseUrl };

const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

// 🔐 Always attach latest token if available
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("bearer_token"); // Update with your key
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
