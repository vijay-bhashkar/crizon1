import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/users";

export const login = (formData) => {
  return axios.post(serverUrl + "/login", formData);
};

export const addUser = (formData) => {
  return axiosApiInstance.post(serverUrl + "/register", formData);
};

export const getUser = (query) => {
  return axiosApiInstance.get(`${serverUrl}/getUsers?${query}`);
};

export const updateUserStatus = (id, formData) => {
  return axiosApiInstance.patch(`${serverUrl}/updateUserStatus/${id}`, formData);
};

export const updateUserKycStatus = (id, formData) => {
  return axiosApiInstance.patch(`${serverUrl}/updateUserKycStatus/${id}`, formData);
};

export const updateDocuments = (id, formData) => {
  return axiosApiInstance.patch(`${serverUrl}/updateDocuments/${id}`, formData);
};
export const deleteDocument = (id, formData) => {
  return axiosApiInstance.patch(`${serverUrl}/deleteDocument/${id}`, formData);
};
export const changePassword = (id, formData) => {
  return axiosApiInstance.patch(`${serverUrl}/changePassword/${id}`, formData);
};

export const deleteUser = (id) => {
  return axiosApiInstance.delete(`${serverUrl}/deleteById/${id}`);
};

export const getSpecificCustomer = (value) => {
  return axiosApiInstance.get(`${serverUrl}/getSpecificCustomer?search=${value}`);
};

export const getById = (id) => {
  return axiosApiInstance.get(`${serverUrl}/getById/${id}`);
};

export const updateUser = (formData, id) => {
  return axiosApiInstance.patch(`${serverUrl}/updateById/${id}`, formData);
};

export const registerFcmToken = (formData) => {
  return axiosApiInstance.post(`${serverUrl}/checkAndRegisterFcmToken`, formData);
};

export const updateNotificationSetting = (formData) => {
  return axiosApiInstance.post(`${serverUrl}/updateNotificationSetting`, formData);
};
