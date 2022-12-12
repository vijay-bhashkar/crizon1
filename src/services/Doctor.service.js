import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/doctor";

export const createDoctor = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createDoctor", formData);
};

export const getAllDoctors = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDoctors?${query}`);
};

export const deleteById = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteDoctor/${id}`);
};

export const updateDoctors = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateDoctors/${id}`, formData);
};

export const diseaseUser = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDisease?${query}`);
}

export const getAllHod = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllHod?${query}`);
}

export const getAlldiseases = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllDisease?${query}`);
}

