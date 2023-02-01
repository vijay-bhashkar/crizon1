import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/clinicHistory";

export const createHistory = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createHistory", formData);
};

export const getAllHistory = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllHistory?${query}`);
};

export const deleteClinic = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteClinic/${id}`);
};

export const updateClinic = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateClinic/${id}`, formData);
};

export const getHistoryByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};


