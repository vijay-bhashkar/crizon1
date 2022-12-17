import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/appointment";

export const createAppointment = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createAppointment", formData);
};

export const getAllAppointment = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllAppointment?${query}`);
};

export const deleteAppointment = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteAppointment/${id}`);
};

export const updateAppointment = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateAppointment/${id}`, formData);
};



