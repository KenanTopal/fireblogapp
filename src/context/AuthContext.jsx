import React, { createContext } from 'react';
import { toastNotify } from '../helper/Toastify';

export const AuthContext = createContext();
const baseUrl = 'https://cwbarry.pythonanywhere.com/';
// const baseUrl = 'https://20001.fullstack.clarusway.com/';

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
