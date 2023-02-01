import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/leverCliHis";

export const createLeverHistory = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createLeverHis", formData);
};

export const getAllLeverHistory = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getLeverHis?${query}`);
};

export const deleteLeverHistory = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteLeverHis/${id}`);
};

export const updateLeverHistory = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateLeverHis/${id}`, formData);
};

export const getLevHisByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};
