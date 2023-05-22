import axios from "axios";

const api = axios.create({
    baseURL: "https://json-server-ex-4i87.onrender.com"
});

export default api;