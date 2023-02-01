import { createLeverHistory, deleteLeverHistory, getAllLeverHistory, getLevHisByPatientId, updateLeverHistory } from "../../../services/LeverHistory.service";

export const LEVERHISTORY_ADD = "LEVERHISTORY_ADD";
export const LEVERHISTORY_ADD_SUCCESS = "LEVERHISTORY_ADD_SUCCESS";
export const LEVERHISTORY_ADD_FAIL = "LEVERHISTORY_ADD_FAIL";

export const GET_ALL_LEVERHISTORYS = "GET_ALL_LEVERHISTORYS";
export const GET_ALL_LEVERHISTORYS_SUCCESS = "GET_ALL_LEVERHISTORYS_SUCCESS";
export const GET_ALL_LEVERHISTORYS_FAIL = "GET_ALL_LEVERHISTORYS_FAIL";

export const UPDATE_LEVERHISTORY_BY_ID = "UPDATE_LEVERHISTORY_BY_ID";
export const UPDATE_LEVERHISTORY_BY_ID_SUCCESS = "UPDATE_LEVERHISTORY_BY_ID_SUCCESS";
export const UPDATE_LEVERHISTORY_BY_ID_FAIL = "UPDATE_LEVERHISTORY_BY_ID_FAIL";

export const SET_LEVERHISTORY_OBJ = "SET_LEVERHISTORY_OBJ";
export const SET_LEVERHISTORY_OBJ_SUCCESS = "SET_LEVERHISTORY_OBJ_SUCCESS";
export const SET_LEVERHISTORY_OBJ_FAIL = "SET_LEVERHISTORY_OBJ_FAIL";

export const GET_LEVERHISTORY_BY_ID = "GET_LEVERHISTORY_BY_ID";
export const GET_LEVERHISTORY_BY_ID_SUCCESS = "GET_LEVERHISTORY_BY_ID_SUCCESS";
export const GET_LEVERHISTORY_BY_ID_FAIL = "GET_LEVERHISTORY_BY_ID_FAIL";

export const DELETE_LEVERHISTORY_BY_ID = "DELETE_LEVERHISTORY_BY_ID";
export const DELETE_LEVERHISTORY_BY_ID_SUCCESS = "DELETE_LEVERHISTORY_BY_ID_SUCCESS";
export const DELETE_LEVERHISTORY_BY_ID_FAIL = "DELETE_LEVERHISTORY_BY_ID_FAIL";

export const LEVERHISTORYAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LEVERHISTORY_ADD });
    let { data: response } = await createLeverHistory(formData);
    console.log(response);
    if (response) {
       dispatch(LEVERHISTORYGet())
       dispatch({
        type: LEVERHISTORY_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERHISTORY_ADD_FAIL, payload: err });
  }
};

export const LEVERHISTORYGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_LEVERHISTORYS });
    let { data: response } = await getAllLeverHistory(formData);
    if (response) {

      dispatch({
        type: GET_ALL_LEVERHISTORYS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERHISTORY_ADD_FAIL, payload: err });
  }
};

export const LEVHISGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getLevHisByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_LEVERHISTORY_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERHISTORY_ADD_FAIL, payload: err });
  }
};

export const SETLEVERHISTORYObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LEVERHISTORY_OBJ });
    if (formData) {
      dispatch({
        type: SET_LEVERHISTORY_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_LEVERHISTORY_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_LEVERHISTORY_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const LEVERHISTORYUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LEVERHISTORY_BY_ID });
    let { data: response } = await updateLeverHistory(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_LEVERHISTORY_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(LEVERHISTORYGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_LEVERHISTORY_BY_ID_FAIL, payload: err });
  }
};

export const LEVERHISTORYDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LEVERHISTORY_BY_ID });
    let { data: response } = await deleteLeverHistory(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_LEVERHISTORY_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(LEVERHISTORYGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_LEVERHISTORY_BY_ID_FAIL, payload: err });
  }
};
