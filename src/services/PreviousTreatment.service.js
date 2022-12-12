import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/preTreatment";

export const createPreTreat = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createPreTreat", formData);
};

export const getAllTreat = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllTreat?${query}`);
};

export const deletePreTreat = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deletePreTreat/${id}`);
};

export const updatePreTreat = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updatePreTreat/${id}`, formData);
};

export const getPreTreatByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};

