import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/nutrition";

export const createNutrition = (formData) => {
    return axiosApiInstance.post(serverUrl + "/createNutrition", formData);
};

export const getAllNutrition = (query) => {
    return axiosApiInstance.get(`${serverUrl}/getAllNutrition?${query}`);
};

export const deleteNutrition = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteNutrition/${id}`);
};

export const updateNutrition = (formData, id) => {
    return axiosApiInstance.patch(`${serverUrl}/updateNutrition/${id}`, formData);
};
export const getNutritionByPatientId = (id) => {
    return axiosApiInstance.get(`${serverUrl}/getByPatientId/${id}`);
};

