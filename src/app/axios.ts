import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL +
    ":" +
    process.env.REACT_APP_BASE_BACKEND_PORT, // Replace with your desired base URL
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export default axiosInstance;
