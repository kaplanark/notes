import axios from "axios";
import router from "./routes";
import store from "./store/store";

const client = axios.create({
    baseURL: process.env.BACKEND_API_URL || "http://127.0.0.1:8000/",
    headers: {
        "Content-Type": "application/json",
    },
});

client.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("accessToken") || "";
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status == 401) {
            store.commit("logout");
            if (router.currentRoute.name === "Login") {
                return Promise.reject(error);
            }
            router.push({ name: "Login" });
        }
        return Promise.reject(error);
    }
);

export default client;