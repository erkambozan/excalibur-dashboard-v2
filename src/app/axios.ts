import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL +
    ":" +
    process.env.REACT_APP_BASE_BACKEND_PORT, // Replace with your desired base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
