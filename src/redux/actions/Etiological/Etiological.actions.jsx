import { createEtiological, deleteEtiological, getAllEtiological, getEtiologicalByPatientId, updateEtiological } from "../../../services/Etiological.service";

export const ETIOLOGICAL_ADD = "ETIOLOGICAL_ADD";
export const ETIOLOGICAL_ADD_SUCCESS = "ETIOLOGICAL_ADD_SUCCESS";
export const ETIOLOGICAL_ADD_FAIL = "ETIOLOGICAL_ADD_FAIL";

export const GET_ALL_ETIOLOGICALS = "GET_ALL_ETIOLOGICALS";
export const GET_ALL_ETIOLOGICALS_SUCCESS = "GET_ALL_ETIOLOGICALS_SUCCESS";
export const GET_ALL_ETIOLOGICALS_FAIL = "GET_ALL_ETIOLOGICALS_FAIL";

export const UPDATE_ETIOLOGICAL_BY_ID = "UPDATE_ETIOLOGICAL_BY_ID";
export const UPDATE_ETIOLOGICAL_BY_ID_SUCCESS = "UPDATE_ETIOLOGICAL_BY_ID_SUCCESS";
export const UPDATE_ETIOLOGICAL_BY_ID_FAIL = "UPDATE_ETIOLOGICAL_BY_ID_FAIL";

export const SET_ETIOLOGICAL_OBJ = "SET_ETIOLOGICAL_OBJ";
export const SET_ETIOLOGICAL_OBJ_SUCCESS = "SET_ETIOLOGICAL_OBJ_SUCCESS";
export const SET_ETIOLOGICAL_OBJ_FAIL = "SET_ETIOLOGICAL_OBJ_FAIL";

export const GET_ETIOLOGICAL_BY_ID = "GET_ETIOLOGICAL_BY_ID";
export const GET_ETIOLOGICAL_BY_ID_SUCCESS = "GET_ETIOLOGICAL_BY_ID_SUCCESS";
export const GET_ETIOLOGICAL_BY_ID_FAIL = "GET_ETIOLOGICAL_BY_ID_FAIL";

export const DELETE_ETIOLOGICAL_BY_ID = "DELETE_ETIOLOGICAL_BY_ID";
export const DELETE_ETIOLOGICAL_BY_ID_SUCCESS = "DELETE_ETIOLOGICAL_BY_ID_SUCCESS";
export const DELETE_ETIOLOGICAL_BY_ID_FAIL = "DELETE_ETIOLOGICAL_BY_ID_FAIL";

export const ETIOLOGICALAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ETIOLOGICAL_ADD });
    let { data: response } = await createEtiological(formData);
    console.log(response);
    if (response) {
       dispatch(ETIOLOGICALGet())
       dispatch({
        type: ETIOLOGICAL_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: ETIOLOGICAL_ADD_FAIL, payload: err });
  }
};

export const ETIOLOGICALGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ETIOLOGICALS });
    let { data: response } = await getAllEtiological(formData);
    if (response) {

      dispatch({
        type: GET_ALL_ETIOLOGICALS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: ETIOLOGICAL_ADD_FAIL, payload: err });
  }
};

export const ETIOLOGICALGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getEtiologicalByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_ETIOLOGICAL_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: ETIOLOGICAL_ADD_FAIL, payload: err });
  }
};

export const SETETIOLOGICALObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ETIOLOGICAL_OBJ });
    if (formData) {
      dispatch({
        type: SET_ETIOLOGICAL_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_ETIOLOGICAL_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_ETIOLOGICAL_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const ETIOLOGICALUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ETIOLOGICAL_BY_ID });
    let { data: response } = await updateEtiological(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_ETIOLOGICAL_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(ETIOLOGICALGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_ETIOLOGICAL_BY_ID_FAIL, payload: err });
  }
};

export const ETIOLOGICALDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ETIOLOGICAL_BY_ID });
    let { data: response } = await deleteEtiological(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_ETIOLOGICAL_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(ETIOLOGICALGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_ETIOLOGICAL_BY_ID_FAIL, payload: err });
  }
};
