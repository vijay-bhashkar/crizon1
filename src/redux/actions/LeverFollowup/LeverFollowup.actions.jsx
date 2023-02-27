import { createLeverFollowUp, deleteLeverFollowUp, getLeverFollowUp, updateLeverFollowUp } from "../../../services/LeverFollowup.service";

export const LEVERFOLLOWUP_ADD = "LEVERFOLLOWUP_ADD";
export const LEVERFOLLOWUP_ADD_SUCCESS = "LEVERFOLLOWUP_ADD_SUCCESS";
export const LEVERFOLLOWUP_ADD_FAIL = "LEVERFOLLOWUP_ADD_FAIL";

export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";
export const GET_ALL_HODS_SUCCESS = "GET_ALL_HODS_SUCCESS";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HOD = "GET_ALL_HOD";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";

export const GET_ALL_LEVERFOLLOWUPS = "GET_ALL_LEVERFOLLOWUPS";
export const GET_ALL_LEVERFOLLOWUPS_SUCCESS = "GET_ALL_LEVERFOLLOWUPS_SUCCESS";
export const GET_ALL_LEVERFOLLOWUPS_FAIL = "GET_ALL_LEVERFOLLOWUPS_FAIL";

export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES  =  "GET_ALL_DISEASES";

export const UPDATE_LEVERFOLLOWUP_BY_ID = "UPDATE_LEVERFOLLOWUP_BY_ID";
export const UPDATE_LEVERFOLLOWUP_BY_ID_SUCCESS = "UPDATE_LEVERFOLLOWUP_BY_ID_SUCCESS";
export const UPDATE_LEVERFOLLOWUP_BY_ID_FAIL = "UPDATE_LEVERFOLLOWUP_BY_ID_FAIL";

export const SET_LEVERFOLLOWUP_OBJ = "SET_LEVERFOLLOWUP_OBJ";
export const SET_LEVERFOLLOWUP_OBJ_SUCCESS = "SET_LEVERFOLLOWUP_OBJ_SUCCESS";
export const SET_LEVERFOLLOWUP_OBJ_FAIL = "SET_LEVERFOLLOWUP_OBJ_FAIL";

export const GET_LEVERFOLLOWUP_BY_ID = "GET_LEVERFOLLOWUP_BY_ID";
export const GET_LEVERFOLLOWUP_BY_ID_SUCCESS = "GET_LEVERFOLLOWUP_BY_ID_SUCCESS";
export const GET_LEVERFOLLOWUP_BY_ID_FAIL = "GET_LEVERFOLLOWUP_BY_ID_FAIL";

export const DELETE_LEVERFOLLOWUP_BY_ID = "DELETE_LEVERFOLLOWUP_BY_ID";
export const DELETE_LEVERFOLLOWUP_BY_ID_SUCCESS = "DELETE_LEVERFOLLOWUP_BY_ID_SUCCESS";
export const DELETE_LEVERFOLLOWUP_BY_ID_FAIL = "DELETE_LEVERFOLLOWUP_BY_ID_FAIL";

export const LEVERFOLLOWUPAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LEVERFOLLOWUP_ADD });
    let { data: response } = await createLeverFollowUp(formData);
    console.log(response);
    if (response) {
       dispatch(LEVERFOLLOWUPGet())
      dispatch({
        type: LEVERFOLLOWUP_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERFOLLOWUP_ADD_FAIL, payload: err });
  }
};

export const LEVERFOLLOWUPGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_LEVERFOLLOWUPS });
    let { data: response } = await getLeverFollowUp(formData);
    console.log(response);
    console.log("aaaa");
    if (response) {
      dispatch({
        type: GET_ALL_LEVERFOLLOWUPS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERFOLLOWUP_ADD_FAIL, payload: err });
  }
};

export const SETLEVERFOLLOWUPObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LEVERFOLLOWUP_OBJ });
    if (formData) {
      dispatch({
        type: SET_LEVERFOLLOWUP_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_LEVERFOLLOWUP_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_LEVERFOLLOWUP_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const LEVERFOLLOWUPUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LEVERFOLLOWUP_BY_ID });
    let { data: response } = await updateLeverFollowUp(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_LEVERFOLLOWUP_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(LEVERFOLLOWUPGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_LEVERFOLLOWUP_BY_ID_FAIL, payload: err });
  }
};

export const LEVERFOLLOWUPDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LEVERFOLLOWUP_BY_ID });
    let { data: response } = await deleteLeverFollowUp(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_LEVERFOLLOWUP_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(LEVERFOLLOWUPGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_LEVERFOLLOWUP_BY_ID_FAIL, payload: err });
  }
};

