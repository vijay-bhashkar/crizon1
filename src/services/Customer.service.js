import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/users";

export const createUser = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createUser", formData);
};

export const getAllUsers = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllUsers?${query}`);
};

export const deleteUser = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteById/${id}`);
};

export const updateUser = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateUser/${id}`, formData);
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

