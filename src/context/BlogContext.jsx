import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toastNotify } from '../helper/Toastify';

export const BlogContext = createContext();
const baseUrl = 'https://cwbarry.pythonanywhere.com/';
// const baseUrl = 'https://20001.fullstack.clarusway.com/';

const BlogContextProvider = ({ children }) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
