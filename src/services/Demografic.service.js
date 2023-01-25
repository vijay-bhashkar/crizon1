import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/demografic";

export const createDemografic = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createDemograph", formData);
};

export const getAllDemografic = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDemografic?${query}`);
};

export const deleteDemografic = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteDemograph/${id}`);
};

export const updateDemografic = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateDemograph/${id}`, formData);
};

export const getAllDoctor = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDoctor?${query}`);
};

export const getAllDisease = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDisease?${query}`);
};
