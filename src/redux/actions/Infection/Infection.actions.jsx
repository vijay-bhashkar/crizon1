import { createInfection, deleteInfection, getAllInfection, updateInfection, getInfectionByPatientId } from "../../../services/Infection.service";

export const INFECTION_ADD = "INFECTION_ADD";
export const INFECTION_ADD_SUCCESS = "INFECTION_ADD_SUCCESS";
export const INFECTION_ADD_FAIL = "INFECTION_ADD_FAIL";

export const GET_ALL_INFECTIONS = "GET_ALL_INFECTIONS";
export const GET_ALL_INFECTIONS_SUCCESS = "GET_ALL_INFECTIONS_SUCCESS";
export const GET_ALL_INFECTIONS_FAIL = "GET_ALL_INFECTIONS_FAIL";

export const UPDATE_INFECTION_BY_ID = "UPDATE_INFECTION_BY_ID";
export const UPDATE_INFECTION_BY_ID_SUCCESS = "UPDATE_INFECTION_BY_ID_SUCCESS";
export const UPDATE_INFECTION_BY_ID_FAIL = "UPDATE_INFECTION_BY_ID_FAIL";

export const SET_INFECTION_OBJ = "SET_INFECTION_OBJ";
export const SET_INFECTION_OBJ_SUCCESS = "SET_INFECTION_OBJ_SUCCESS";
export const SET_INFECTION_OBJ_FAIL = "SET_INFECTION_OBJ_FAIL";

export const GET_INFECTION_BY_ID = "GET_INFECTION_BY_ID";
export const GET_INFECTION_BY_ID_SUCCESS = "GET_INFECTION_BY_ID_SUCCESS";
export const GET_INFECTION_BY_ID_FAIL = "GET_INFECTION_BY_ID_FAIL";

export const DELETE_INFECTION_BY_ID = "DELETE_INFECTION_BY_ID";
export const DELETE_INFECTION_BY_ID_SUCCESS = "DELETE_INFECTION_BY_ID_SUCCESS";
export const DELETE_INFECTION_BY_ID_FAIL = "DELETE_INFECTION_BY_ID_FAIL";

export const INFECTIONAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: INFECTION_ADD });
    let { data: response } = await createInfection(formData);
    console.log(response);
    if (response) {
       dispatch(INFECTIONGet())
      dispatch({
        type: INFECTION_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: INFECTION_ADD_FAIL, payload: err });
  }
};

export const INFECTIONGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_INFECTIONS });
    let { data: response } = await getAllInfection(formData);
    if (response) {

      dispatch({
        type: GET_ALL_INFECTIONS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: INFECTION_ADD_FAIL, payload: err });
  }
};


export const INFECTIONGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getInfectionByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_INFECTION_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: INFECTION_ADD_FAIL, payload: err });
  }
};

export const SETINFECTIONObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_INFECTION_OBJ });
    if (formData) {
      dispatch({
        type: SET_INFECTION_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_INFECTION_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_INFECTION_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const INFECTIONUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_INFECTION_BY_ID });
    let { data: response } = await updateInfection(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_INFECTION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(INFECTIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_INFECTION_BY_ID_FAIL, payload: err });
  }
};

export const INFECTIONDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_INFECTION_BY_ID });
    let { data: response } = await deleteInfection(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_INFECTION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(INFECTIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_INFECTION_BY_ID_FAIL, payload: err });
  }
};
