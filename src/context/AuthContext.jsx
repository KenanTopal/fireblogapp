import React, { createContext, useEffect, useState } from "react";
import { toastNotify } from "../helper/Toastify";
import axios from "axios";

export const AuthContext = createContext();
// const baseUrl = "https://cwbarry.pythonanywhere.com/";
const baseUrl = "https://20001.fullstack.clarusway.com/";

const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const checkUser = () => {
    if (userInfo) {
      localStorage.setItem("user", JSON.stringify(userInfo));
    } else {
      const user = localStorage.getItem("user");
      if (user) {
        setUserInfo(JSON.parse(user));
      }
    }
  };

  if (!userInfo) checkUser();

  useEffect(() => {
    checkUser();
  }, [userInfo]);

  const registerUser = async (userData, navigate) => {
    console.log(userData);
    try {
      const res = await axios({
        method: "post",
        url: `${baseUrl}account/register/`,
        data: { ...userData, password2: userData.password },
      });

      console.log(res.data);
      setUserInfo({ key: res.data.key, ...res.data.user });
      toastNotify("User registered successfully", "success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toastNotify(error.messsage, "error");
    }
  };

  const loginUser = async (userData, navigate) => {
    try {
      const res = await axios({
        method: "post",
        url: `${baseUrl}account/login/`,
        data: userData,
      });

      console.log(res.data);
      setUserInfo({ key: res.data.key, ...res.data.user });
      toastNotify("User loggedin successfully", "success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toastNotify(error.messsage, "error");
    }
  };

  const logout = async (navigate) => {
    localStorage.removeItem("user");
    setUserInfo(null);
    toastNotify("User logged out successfully", "success");
    navigate("/");
  };

  const updateUser = async (userData, navigate) => {
    try {
      const res = await axios({
        method: "patch",
        url: `${baseUrl}account/user/`,
        data: userData,
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      setUserInfo({
        ...userInfo,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
      });
      toastNotify("User updated successfully", "success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toastNotify(error.messsage, "error");
    }
  };

  return (
    <AuthContext.Provider
      value={{ registerUser, loginUser, userInfo, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;