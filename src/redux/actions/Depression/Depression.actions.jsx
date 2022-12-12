import { createDepression, deleteDepression, getAllDepression, updateDepression , getDepressionByPatientId } from "../../../services/Depression.service";

export const DEPRESSION_ADD = "DEPRESSION_ADD";
export const DEPRESSION_ADD_SUCCESS = "DEPRESSION_ADD_SUCCESS";
export const DEPRESSION_ADD_FAIL = "DEPRESSION_ADD_FAIL";

export const GET_ALL_DEPRESSIONS = "GET_ALL_DEPRESSIONS";
export const GET_ALL_DEPRESSIONS_SUCCESS = "GET_ALL_DEPRESSIONS_SUCCESS";
export const GET_ALL_DEPRESSIONS_FAIL = "GET_ALL_DEPRESSIONS_FAIL";

export const UPDATE_DEPRESSION_BY_ID = "UPDATE_DEPRESSION_BY_ID";
export const UPDATE_DEPRESSION_BY_ID_SUCCESS = "UPDATE_DEPRESSION_BY_ID_SUCCESS";
export const UPDATE_DEPRESSION_BY_ID_FAIL = "UPDATE_DEPRESSION_BY_ID_FAIL";

export const SET_DEPRESSION_OBJ = "SET_DEPRESSION_OBJ";
export const SET_DEPRESSION_OBJ_SUCCESS = "SET_DEPRESSION_OBJ_SUCCESS";
export const SET_DEPRESSION_OBJ_FAIL = "SET_DEPRESSION_OBJ_FAIL";

export const GET_DEPRESSION_BY_ID = "GET_DEPRESSION_BY_ID";
export const GET_DEPRESSION_BY_ID_SUCCESS = "GET_DEPRESSION_BY_ID_SUCCESS";
export const GET_DEPRESSION_BY_ID_FAIL = "GET_DEPRESSION_BY_ID_FAIL";

export const DELETE_DEPRESSION_BY_ID = "DELETE_DEPRESSION_BY_ID";
export const DELETE_DEPRESSION_BY_ID_SUCCESS = "DELETE_DEPRESSION_BY_ID_SUCCESS";
export const DELETE_DEPRESSION_BY_ID_FAIL = "DELETE_DEPRESSION_BY_ID_FAIL";

export const DEPRESSIONAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DEPRESSION_ADD });
    let { data: response } = await createDepression(formData);
    // console.log(response);
    if (response) {
       dispatch(DEPRESSIONGet())
      dispatch({
        type: DEPRESSION_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DEPRESSION_ADD_FAIL, payload: err });
  }
};

export const DEPRESSIONGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DEPRESSIONS });
    let { data: response } = await getAllDepression(formData);
    // console.log(response);
    if (response) {
      dispatch({
        type: GET_ALL_DEPRESSIONS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DEPRESSION_ADD_FAIL, payload: err });
  }
};


export const DEPRESSIONGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getDepressionByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_DEPRESSION_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DEPRESSION_ADD_FAIL, payload: err });
  }
};

export const SETDEPRESSIONObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_DEPRESSION_OBJ });
    if (formData) {
      dispatch({
        type: SET_DEPRESSION_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_DEPRESSION_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_DEPRESSION_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const DEPRESSIONUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DEPRESSION_BY_ID });
    let { data: response } = await updateDepression(formData, id);
    if (response) {
      // console.log(response);
      dispatch({
        type: UPDATE_DEPRESSION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(DEPRESSIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_DEPRESSION_BY_ID_FAIL, payload: err });
  }
};

export const DEPRESSIONDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DEPRESSION_BY_ID });
    let { data: response } = await deleteDepression(id);
    if (response) {
      // console.log(response);
      dispatch({
        type: DELETE_DEPRESSION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(DEPRESSIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_DEPRESSION_BY_ID_FAIL, payload: err });
  }
};
