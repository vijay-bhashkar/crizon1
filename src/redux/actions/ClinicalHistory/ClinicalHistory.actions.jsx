import { createHistory, deleteClinic, getAllHistory, getHistoryByPatientId, updateClinic } from "../../../services/ClinicalHistory.service";

export const CLINICALHISTORY_ADD = "CLINICALHISTORY_ADD";
export const CLINICALHISTORY_ADD_SUCCESS = "CLINICALHISTORY_ADD_SUCCESS";
export const CLINICALHISTORY_ADD_FAIL = "CLINICALHISTORY_ADD_FAIL";

export const GET_ALL_CLINICALHISTORYS = "GET_ALL_CLINICALHISTORYS";
export const GET_ALL_CLINICALHISTORYS_SUCCESS = "GET_ALL_CLINICALHISTORYS_SUCCESS";
export const GET_ALL_CLINICALHISTORYS_FAIL = "GET_ALL_CLINICALHISTORYS_FAIL";

export const UPDATE_CLINICALHISTORY_BY_ID = "UPDATE_CLINICALHISTORY_BY_ID";
export const UPDATE_CLINICALHISTORY_BY_ID_SUCCESS = "UPDATE_CLINICALHISTORY_BY_ID_SUCCESS";
export const UPDATE_CLINICALHISTORY_BY_ID_FAIL = "UPDATE_CLINICALHISTORY_BY_ID_FAIL";

export const SET_CLINICALHISTORY_OBJ = "SET_CLINICALHISTORY_OBJ";
export const SET_CLINICALHISTORY_OBJ_SUCCESS = "SET_CLINICALHISTORY_OBJ_SUCCESS";
export const SET_CLINICALHISTORY_OBJ_FAIL = "SET_CLINICALHISTORY_OBJ_FAIL";

export const GET_CLINICALHISTORY_BY_ID = "GET_CLINICALHISTORY_BY_ID";
export const GET_CLINICALHISTORY_BY_ID_SUCCESS = "GET_CLINICALHISTORY_BY_ID_SUCCESS";
export const GET_CLINICALHISTORY_BY_ID_FAIL = "GET_CLINICALHISTORY_BY_ID_FAIL";

export const DELETE_CLINICALHISTORY_BY_ID = "DELETE_CLINICALHISTORY_BY_ID";
export const DELETE_CLINICALHISTORY_BY_ID_SUCCESS = "DELETE_CLINICALHISTORY_BY_ID_SUCCESS";
export const DELETE_CLINICALHISTORY_BY_ID_FAIL = "DELETE_CLINICALHISTORY_BY_ID_FAIL";

export const CLINICALHISTORYAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CLINICALHISTORY_ADD });
    let { data: response } = await createHistory(formData);
    console.log(response);
    if (response) {
       dispatch(CLINICALHISTORYGet())
      dispatch({
        type: CLINICALHISTORY_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: CLINICALHISTORY_ADD_FAIL, payload: err });
  }
};

export const CLINICALHISTORYGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CLINICALHISTORYS });
    let { data: response } = await getAllHistory(formData);
    if (response) {

      dispatch({
        type: GET_ALL_CLINICALHISTORYS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: CLINICALHISTORY_ADD_FAIL, payload: err });
  }
};

export const CLINICALHISTORYGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getHistoryByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_CLINICALHISTORY_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: CLINICALHISTORY_ADD_FAIL, payload: err });
  }
};

export const SETCLINICALHISTORYObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_CLINICALHISTORY_OBJ });
    if (formData) {
      dispatch({
        type: SET_CLINICALHISTORY_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_CLINICALHISTORY_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_CLINICALHISTORY_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const CLINICALHISTORYUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CLINICALHISTORY_BY_ID });
    let { data: response } = await updateClinic(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_CLINICALHISTORY_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(CLINICALHISTORYGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_CLINICALHISTORY_BY_ID_FAIL, payload: err });
  }
};

export const CLINICALHISTORYDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CLINICALHISTORY_BY_ID });
    let { data: response } = await deleteClinic(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_CLINICALHISTORY_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(CLINICALHISTORYGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_CLINICALHISTORY_BY_ID_FAIL, payload: err });
  }
};
