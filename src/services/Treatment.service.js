import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/treatment";

export const createTreatment = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createTreatment", formData);
};

export const getAllTreatment = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllTreatment?${query}`);
};

export const deleteTreatment = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteTreatment/${id}`);
};

export const updateTreatment = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateTreatment/${id}`, formData);
};

export const getTreatByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};

