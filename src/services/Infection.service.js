import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/infection";

export const createInfection = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createInfection", formData);
};

export const getAllInfection = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllInfection?${query}`);
};

export const deleteInfection = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteInfection/${id}`);
};

export const updateInfection = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateInfection/${id}`, formData);
};

export const getInfectionByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};

