import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/etiological";

export const createEtiological = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createEtiological", formData);
};

export const getAllEtiological = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getEtiological?${query}`);
};

export const deleteEtiological = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteEtiological/${id}`);
};

export const updateEtiological = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateEtiological/${id}`, formData);
};

export const getEtiologicalByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};