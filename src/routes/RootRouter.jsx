import React, { useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthorizedRoutes from "./AuthorizedRoutes";

import { useSelector } from "react-redux";
import UnauthorizedRoutes from "./UnauthorizedRoutes";
import { axiosApiInstance } from "../App";
import { logoutUser } from "../redux/actions/auth/auth.actions";
export default function RootRouter() {
  const authObj = useSelector((state) => state.auth);

  let token = useSelector((state) => state.auth.token)

  useMemo(() => {
    axiosApiInstance.interceptors.request.use(
      async (config) => {
        // console.log(token)
        if (token) {
          config.headers['authorization'] = 'Bearer ' + token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
      },
      error => {
        console.log(error)
        Promise.reject(error)
      });
    axiosApiInstance.interceptors.response.use(
      (res) => {
        // Add configurations here
        return res;
      },
      async (err) => {
        console.log("INterceptor error")

        await logoutUser()

        return Promise.reject(err);
      }
    );
  }, [])



  return <Router>{authObj?.isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</Router>;
}
