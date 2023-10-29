import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./auth_service";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

export const fetchToken = async (login, { email, password }) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    if (response.status === 200) {
      login({ isLoggedIn: true, obj: response.data });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch token");
  }
};
