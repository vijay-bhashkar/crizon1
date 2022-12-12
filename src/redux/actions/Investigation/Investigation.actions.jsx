import { createInvesti, deleteInvesti, getAllInvesti, updateInvesti, getInvestigationByPatientId } from "../../../services/Investigation.service";

export const INVESTIGATION_ADD = "INVESTIGATION_ADD";
export const INVESTIGATION_ADD_SUCCESS = "INVESTIGATION_ADD_SUCCESS";
export const INVESTIGATION_ADD_FAIL = "INVESTIGATION_ADD_FAIL";

export const GET_ALL_INVESTIGATIONS = "GET_ALL_INVESTIGATIONS";
export const GET_ALL_INVESTIGATIONS_SUCCESS = "GET_ALL_INVESTIGATIONS_SUCCESS";
export const GET_ALL_INVESTIGATIONS_FAIL = "GET_ALL_INVESTIGATIONS_FAIL";

export const UPDATE_INVESTIGATION_BY_ID = "UPDATE_INVESTIGATION_BY_ID";
export const UPDATE_INVESTIGATION_BY_ID_SUCCESS = "UPDATE_INVESTIGATION_BY_ID_SUCCESS";
export const UPDATE_INVESTIGATION_BY_ID_FAIL = "UPDATE_INVESTIGATION_BY_ID_FAIL";

export const SET_INVESTIGATION_OBJ = "SET_INVESTIGATION_OBJ";
export const SET_INVESTIGATION_OBJ_SUCCESS = "SET_INVESTIGATION_OBJ_SUCCESS";
export const SET_INVESTIGATION_OBJ_FAIL = "SET_INVESTIGATION_OBJ_FAIL";

export const GET_INVESTIGATION_BY_ID = "GET_INVESTIGATION_BY_ID";
export const GET_INVESTIGATION_BY_ID_SUCCESS = "GET_INVESTIGATION_BY_ID_SUCCESS";
export const GET_INVESTIGATION_BY_ID_FAIL = "GET_INVESTIGATION_BY_ID_FAIL";

export const DELETE_INVESTIGATION_BY_ID = "DELETE_INVESTIGATION_BY_ID";
export const DELETE_INVESTIGATION_BY_ID_SUCCESS = "DELETE_INVESTIGATION_BY_ID_SUCCESS";
export const DELETE_INVESTIGATION_BY_ID_FAIL = "DELETE_INVESTIGATION_BY_ID_FAIL";

export const INVESTIGATIONAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: INVESTIGATION_ADD });
    let { data: response } = await createInvesti(formData);
    console.log(response);
    if (response) {
       dispatch(INVESTIGATIONGet())
      dispatch({
        type: INVESTIGATION_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: INVESTIGATION_ADD_FAIL, payload: err });
  }
};

export const INVESTIGATIONGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_INVESTIGATIONS });
    let { data: response } = await getAllInvesti(formData);
    if (response) {

      dispatch({
        type: GET_ALL_INVESTIGATIONS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: INVESTIGATION_ADD_FAIL, payload: err });
  }
};


export const INVESTIGATIONGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getInvestigationByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_INVESTIGATION_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: INVESTIGATION_ADD_FAIL, payload: err });
  }
};

export const SETINVESTIGATIONObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_INVESTIGATION_OBJ });
    if (formData) {
      dispatch({
        type: SET_INVESTIGATION_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_INVESTIGATION_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_INVESTIGATION_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const INVESTIGATIONUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_INVESTIGATION_BY_ID });
    let { data: response } = await updateInvesti(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_INVESTIGATION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(INVESTIGATIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_INVESTIGATION_BY_ID_FAIL, payload: err });
  }
};

export const INVESTIGATIONDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_INVESTIGATION_BY_ID });
    let { data: response } = await deleteInvesti(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_INVESTIGATION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(INVESTIGATIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_INVESTIGATION_BY_ID_FAIL, payload: err });
  }
};
