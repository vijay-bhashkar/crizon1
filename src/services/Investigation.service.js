import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/investigation";

export const createInvesti = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createInvesti", formData);
};

export const getAllInvesti = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllInvesti?${query}`);
};

export const deleteInvesti = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteInvesti/${id}`);
};

export const updateInvesti = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateInvesti/${id}`, formData);
};

export const getInvestigationByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};