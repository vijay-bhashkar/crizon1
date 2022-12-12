import { createTreatment, deleteTreatment, getAllTreatment, updateTreatment, getTreatByPatientId } from "../../../services/Treatment.service";

export const TREATMENT_ADD = "TREATMENT_ADD";
export const TREATMENT_ADD_SUCCESS = "TREATMENT_ADD_SUCCESS";
export const TREATMENT_ADD_FAIL = "TREATMENT_ADD_FAIL";

export const GET_ALL_TREATMENTS = "GET_ALL_TREATMENTS";
export const GET_ALL_TREATMENTS_SUCCESS = "GET_ALL_TREATMENTS_SUCCESS";
export const GET_ALL_TREATMENTS_FAIL = "GET_ALL_TREATMENTS_FAIL";

export const UPDATE_TREATMENT_BY_ID = "UPDATE_TREATMENT_BY_ID";
export const UPDATE_TREATMENT_BY_ID_SUCCESS = "UPDATE_TREATMENT_BY_ID_SUCCESS";
export const UPDATE_TREATMENT_BY_ID_FAIL = "UPDATE_TREATMENT_BY_ID_FAIL";

export const SET_TREATMENT_OBJ = "SET_TREATMENT_OBJ";
export const SET_TREATMENT_OBJ_SUCCESS = "SET_TREATMENT_OBJ_SUCCESS";
export const SET_TREATMENT_OBJ_FAIL = "SET_TREATMENT_OBJ_FAIL";

export const GET_TREATMENT_BY_ID = "GET_TREATMENT_BY_ID";
export const GET_TREATMENT_BY_ID_SUCCESS = "GET_TREATMENT_BY_ID_SUCCESS";
export const GET_TREATMENT_BY_ID_FAIL = "GET_TREATMENT_BY_ID_FAIL";

export const DELETE_TREATMENT_BY_ID = "DELETE_TREATMENT_BY_ID";
export const DELETE_TREATMENT_BY_ID_SUCCESS = "DELETE_TREATMENT_BY_ID_SUCCESS";
export const DELETE_TREATMENT_BY_ID_FAIL = "DELETE_TREATMENT_BY_ID_FAIL";

export const TREATMENTAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: TREATMENT_ADD });
    let { data: response } = await createTreatment(formData);
    console.log(response);
    if (response) {
       dispatch(TREATMENTGet())
      dispatch({
        type: TREATMENT_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: TREATMENT_ADD_FAIL, payload: err });
  }
};

export const TREATMENTGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_TREATMENTS });
    let { data: response } = await getAllTreatment(formData);
    if (response) {

      dispatch({
        type: GET_ALL_TREATMENTS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: TREATMENT_ADD_FAIL, payload: err });
  }
};


export const TREATGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getTreatByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_TREATMENT_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: TREATMENT_ADD_FAIL, payload: err });
  }
};

export const SETTREATMENTObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_TREATMENT_OBJ });
    if (formData) {
      dispatch({
        type: SET_TREATMENT_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_TREATMENT_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_TREATMENT_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const TREATMENTUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TREATMENT_BY_ID });
    let { data: response } = await updateTreatment(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_TREATMENT_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(TREATMENTGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_TREATMENT_BY_ID_FAIL, payload: err });
  }
};

export const TREATMENTDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TREATMENT_BY_ID });
    let { data: response } = await deleteTreatment(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_TREATMENT_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(TREATMENTGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_TREATMENT_BY_ID_FAIL, payload: err });
  }
};
