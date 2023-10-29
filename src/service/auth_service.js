import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({ isLoggedIn: false, obj: null });

  //   {isLoggedIn : true/false, obj : {} }
  const login = (authObj) => {
    setAuth(authObj);
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, obj: null });
  };

  useEffect(() => {
    setAuth({ isLoggedIn: false, obj: null });
  }, []);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    headers: {
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = auth.obj.jwtToken; // Fetch the token from context
      if (token) {
        config.headers["Auth"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const initState = {
    auth,
    login,
    logout,
    axiosInstance,
  };

  return (
    <AuthContext.Provider value={initState}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
