import { createAppointment, deleteAppointment, getAllAppointment, updateAppointment } from "../../../services/Appointment.service";

export const APPOINTMENT_ADD = "APPOINTMENT_ADD";
export const APPOINTMENT_ADD_SUCCESS = "APPOINTMENT_ADD_SUCCESS";
export const APPOINTMENT_ADD_FAIL = "APPOINTMENT_ADD_FAIL";

export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";
export const GET_ALL_HODS_SUCCESS = "GET_ALL_HODS_SUCCESS";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HOD = "GET_ALL_HOD";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";

export const GET_ALL_APPOINTMENTS = "GET_ALL_APPOINTMENTS";
export const GET_ALL_APPOINTMENTS_SUCCESS = "GET_ALL_APPOINTMENTS_SUCCESS";
export const GET_ALL_APPOINTMENTS_FAIL = "GET_ALL_APPOINTMENTS_FAIL";

export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES  =  "GET_ALL_DISEASES";

export const UPDATE_APPOINTMENT_BY_ID = "UPDATE_APPOINTMENT_BY_ID";
export const UPDATE_APPOINTMENT_BY_ID_SUCCESS = "UPDATE_APPOINTMENT_BY_ID_SUCCESS";
export const UPDATE_APPOINTMENT_BY_ID_FAIL = "UPDATE_APPOINTMENT_BY_ID_FAIL";

export const SET_APPOINTMENT_OBJ = "SET_APPOINTMENT_OBJ";
export const SET_APPOINTMENT_OBJ_SUCCESS = "SET_APPOINTMENT_OBJ_SUCCESS";
export const SET_APPOINTMENT_OBJ_FAIL = "SET_APPOINTMENT_OBJ_FAIL";

export const GET_APPOINTMENT_BY_ID = "GET_APPOINTMENT_BY_ID";
export const GET_APPOINTMENT_BY_ID_SUCCESS = "GET_APPOINTMENT_BY_ID_SUCCESS";
export const GET_APPOINTMENT_BY_ID_FAIL = "GET_APPOINTMENT_BY_ID_FAIL";

export const DELETE_APPOINTMENT_BY_ID = "DELETE_APPOINTMENT_BY_ID";
export const DELETE_APPOINTMENT_BY_ID_SUCCESS = "DELETE_APPOINTMENT_BY_ID_SUCCESS";
export const DELETE_APPOINTMENT_BY_ID_FAIL = "DELETE_APPOINTMENT_BY_ID_FAIL";

export const APPOINTMENTAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_ADD });
    let { data: response } = await createAppointment(formData);
    console.log(response);
    if (response) {
       dispatch(APPOINTMENTGet())
      dispatch({
        type: APPOINTMENT_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: APPOINTMENT_ADD_FAIL, payload: err });
  }
};

export const APPOINTMENTGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_APPOINTMENTS });
    let { data: response } = await getAllAppointment(formData);
    console.log(response);
    if (response) {
      dispatch({
        type: GET_ALL_APPOINTMENTS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: APPOINTMENT_ADD_FAIL, payload: err });
  }
};

export const SETAPPOINTMENTObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_APPOINTMENT_OBJ });
    if (formData) {
      dispatch({
        type: SET_APPOINTMENT_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_APPOINTMENT_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_APPOINTMENT_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const APPOINTMENTUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_APPOINTMENT_BY_ID });
    let { data: response } = await updateAppointment(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_APPOINTMENT_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(APPOINTMENTGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_APPOINTMENT_BY_ID_FAIL, payload: err });
  }
};

export const APPOINTMENTDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_APPOINTMENT_BY_ID });
    let { data: response } = await deleteAppointment(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_APPOINTMENT_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(APPOINTMENTGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_APPOINTMENT_BY_ID_FAIL, payload: err });
  }
};




