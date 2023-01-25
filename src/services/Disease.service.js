import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/disease";

export const createDisease = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createDisease", formData);
};

export const getDisease = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getDisease?${query}`);
};

export const deleteDisease = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteDisease/${id}`);
};

export const updateDisease = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateDisease/${id}`, formData);
};


