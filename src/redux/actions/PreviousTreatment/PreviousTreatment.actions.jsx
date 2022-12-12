import { createPreTreat, deletePreTreat, getAllTreat, updatePreTreat, getPreTreatByPatientId } from "../../../services/PreviousTreatment.service";

export const PREVIOUSTREATMENT_ADD = "PREVIOUSTREATMENT_ADD";
export const PREVIOUSTREATMENT_ADD_SUCCESS = "PREVIOUSTREATMENT_ADD_SUCCESS";
export const PREVIOUSTREATMENT_ADD_FAIL = "PREVIOUSTREATMENT_ADD_FAIL";

export const GET_ALL_PREVIOUSTREATMENTS = "GET_ALL_PREVIOUSTREATMENTS";
export const GET_ALL_PREVIOUSTREATMENTS_SUCCESS = "GET_ALL_PREVIOUSTREATMENTS_SUCCESS";
export const GET_ALL_PREVIOUSTREATMENTS_FAIL = "GET_ALL_PREVIOUSTREATMENTS_FAIL";

export const UPDATE_PREVIOUSTREATMENT_BY_ID = "UPDATE_PREVIOUSTREATMENT_BY_ID";
export const UPDATE_PREVIOUSTREATMENT_BY_ID_SUCCESS = "UPDATE_PREVIOUSTREATMENT_BY_ID_SUCCESS";
export const UPDATE_PREVIOUSTREATMENT_BY_ID_FAIL = "UPDATE_PREVIOUSTREATMENT_BY_ID_FAIL";

export const SET_PREVIOUSTREATMENT_OBJ = "SET_PREVIOUSTREATMENT_OBJ";
export const SET_PREVIOUSTREATMENT_OBJ_SUCCESS = "SET_PREVIOUSTREATMENT_OBJ_SUCCESS";
export const SET_PREVIOUSTREATMENT_OBJ_FAIL = "SET_PREVIOUSTREATMENT_OBJ_FAIL";

export const GET_PREVIOUSTREATMENT_BY_ID = "GET_PREVIOUSTREATMENT_BY_ID";
export const GET_PREVIOUSTREATMENT_BY_ID_SUCCESS = "GET_PREVIOUSTREATMENT_BY_ID_SUCCESS";
export const GET_PREVIOUSTREATMENT_BY_ID_FAIL = "GET_PREVIOUSTREATMENT_BY_ID_FAIL";

export const DELETE_PREVIOUSTREATMENT_BY_ID = "DELETE_PREVIOUSTREATMENT_BY_ID";
export const DELETE_PREVIOUSTREATMENT_BY_ID_SUCCESS = "DELETE_PREVIOUSTREATMENT_BY_ID_SUCCESS";
export const DELETE_PREVIOUSTREATMENT_BY_ID_FAIL = "DELETE_PREVIOUSTREATMENT_BY_ID_FAIL";

export const PREVIOUSTREATMENTAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: PREVIOUSTREATMENT_ADD });
    let { data: response } = await createPreTreat(formData);
    console.log(response);
    if (response) {
       dispatch(PREVIOUSTREATMENTGet())
      dispatch({
        type: PREVIOUSTREATMENT_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: PREVIOUSTREATMENT_ADD_FAIL, payload: err });
  }
};

export const PREVIOUSTREATMENTGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PREVIOUSTREATMENTS });
    let { data: response } = await getAllTreat(formData);
    if (response) {

      dispatch({
        type: GET_ALL_PREVIOUSTREATMENTS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: PREVIOUSTREATMENT_ADD_FAIL, payload: err });
  }
};

export const PREVIOUSTREATMENTGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getPreTreatByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_PREVIOUSTREATMENT_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: PREVIOUSTREATMENT_ADD_FAIL, payload: err });
  }
};

export const SETPREVIOUSTREATMENTObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_PREVIOUSTREATMENT_OBJ });
    if (formData) {
      dispatch({
        type: SET_PREVIOUSTREATMENT_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_PREVIOUSTREATMENT_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_PREVIOUSTREATMENT_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const PREVIOUSTREATMENTUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PREVIOUSTREATMENT_BY_ID });
    let { data: response } = await updatePreTreat(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_PREVIOUSTREATMENT_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(PREVIOUSTREATMENTGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_PREVIOUSTREATMENT_BY_ID_FAIL, payload: err });
  }
};

export const PREVIOUSTREATMENTDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PREVIOUSTREATMENT_BY_ID });
    let { data: response } = await deletePreTreat(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_PREVIOUSTREATMENT_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(PREVIOUSTREATMENTGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_PREVIOUSTREATMENT_BY_ID_FAIL, payload: err });
  }
};
