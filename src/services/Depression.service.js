import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/depression";

export const createDepression = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createDepression", formData);
};

export const getAllDepression = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDepression?${query}`);
};

export const deleteDepression = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteDepression/${id}`);
};

export const updateDepression = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateDepression/${id}`, formData);
};

export const getDepressionByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};

