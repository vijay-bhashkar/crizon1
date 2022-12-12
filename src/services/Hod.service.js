import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/hod";

export const createHod = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createHod", formData);
};

export const getAllHod = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllHod?${query}`);
};

export const deleteHod = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteHod/${id}`);
};

export const updateHod = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateHod/${id}`, formData);
};

export const getAlldiseases = (query) => {
    return axiosApiInstance.get(`${url}/doctor/getAllDisease?${query}`);
}