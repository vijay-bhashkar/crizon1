import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/leverPerDetail";

export const createLeverDetail = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createleverPerDetail", formData);
};

export const getAllLeverDetail = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getleverPerDetail?${query}`);
};

export const deleteLeverDetail = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteleverPerDetail/${id}`);
};

export const updateLeverDetail = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateleverPerDetail/${id}`, formData);
};


