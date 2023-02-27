import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/leverFollowup";

export const createLeverFollowUp = (formData)=>{
    return axiosApiInstance.post(serverUrl + "/createLeverFollowUp", formData);
}

export const getLeverFollowUp = (query)=>{
    return axiosApiInstance.get(`${serverUrl}/getLeverFollowUp?${query}`);
}

export const deleteLeverFollowUp = (id)=>{
    return axiosApiInstance.delete(`${serverUrl}/deleteLeverFollowUp/${id}`);
}

export const updateLeverFollowUp = (formData, id)=>{
    return axiosApiInstance.patch(`${serverUrl}/updateLeverFollowUp/${id}`,formData)
}

