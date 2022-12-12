import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/subAdmin";

export const createSubAdmin = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createSubAdmin", formData);
};

export const getSubAdmin = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getSubAdmin?${query}`);
};

export const updateSubAdmin = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateSubAdmin/${id}`, formData);
};

export const deleteSubAdmin = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteSubAdmin/${id}`);
};



