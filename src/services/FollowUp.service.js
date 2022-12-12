import axios from "axios";
import { axiosApiInstance } from "../App";
import { url } from "./url.service";

const serverUrl = url + "/followUp";

export const createFollowUp = (formData)=>{
    return axiosApiInstance.post(serverUrl + "/createFollowUp", formData);
}

export const getAllFollowUp = (query)=>{
    return axiosApiInstance.get(`${serverUrl}/getAllFollowUp?${query}`);
}

export const deleteById = (id)=>{
    return axiosApiInstance.delete(`${serverUrl}/deleteById/${id}`);
}

export const updateById = (formData, id)=>{
    return axiosApiInstance.patch(`${serverUrl}/updateById/${id}`,formData)
}

