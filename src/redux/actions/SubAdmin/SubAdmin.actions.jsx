import { createSubAdmin, deleteSubAdmin, getSubAdmin, updateSubAdmin, } from "../../../services/SubAdmin.service";

export const SUBADMIN_ADD = "SUBADMIN_ADD";
export const SUBADMIN_ADD_SUCCESS = "SUBADMIN_ADD_SUCCESS";
export const SUBADMIN_ADD_FAIL = "SUBADMIN_ADD_FAIL";

export const GET_ALL_SUBADMINS = "GET_ALL_SUBADMINS";
export const GET_ALL_SUBADMINS_SUCCESS = "GET_ALL_SUBADMINS_SUCCESS";
export const GET_ALL_SUBADMINS_FAIL = "GET_ALL_SUBADMINS_FAIL";

export const UPDATE_SUBADMIN_BY_ID = "UPDATE_SUBADMIN_BY_ID";
export const UPDATE_SUBADMIN_BY_ID_SUCCESS = "UPDATE_SUBADMIN_BY_ID_SUCCESS";
export const UPDATE_SUBADMIN_BY_ID_FAIL = "UPDATE_SUBADMIN_BY_ID_FAIL";

export const SET_SUBADMIN_OBJ = "SET_SUBADMIN_OBJ";
export const SET_SUBADMIN_OBJ_SUCCESS = "SET_SUBADMIN_OBJ_SUCCESS";
export const SET_SUBADMIN_OBJ_FAIL = "SET_SUBADMIN_OBJ_FAIL";

export const GET_SUBADMIN_BY_ID = "GET_SUBADMIN_BY_ID";
export const GET_SUBADMIN_BY_ID_SUCCESS = "GET_SUBADMIN_BY_ID_SUCCESS";
export const GET_SUBADMIN_BY_ID_FAIL = "GET_SUBADMIN_BY_ID_FAIL";

export const DELETE_SUBADMIN_BY_ID = "DELETE_SUBADMIN_BY_ID";
export const DELETE_SUBADMIN_BY_ID_SUCCESS = "DELETE_SUBADMIN_BY_ID_SUCCESS";
export const DELETE_SUBADMIN_BY_ID_FAIL = "DELETE_SUBADMIN_BY_ID_FAIL";

export const SUBADMINAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SUBADMIN_ADD });
    let { data: response } = await createSubAdmin(formData);
    console.log(response);
    if (response) {
       dispatch(SUBADMINGet())
      dispatch({
        type: SUBADMIN_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SUBADMIN_ADD_FAIL, payload: err });
  }
};

export const SUBADMINGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SUBADMINS });
    let { data: response } = await getSubAdmin(formData);
    if (response) {

      dispatch({
        type: GET_ALL_SUBADMINS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SUBADMIN_ADD_FAIL, payload: err });
  }
};

export const SETSUBADMINObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_SUBADMIN_OBJ });
    if (formData) {
      dispatch({
        type: SET_SUBADMIN_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_SUBADMIN_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_SUBADMIN_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const SUBADMINUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SUBADMIN_BY_ID });
    let { data: response } = await updateSubAdmin(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_SUBADMIN_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(SUBADMINGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_SUBADMIN_BY_ID_FAIL, payload: err });
  }
};

export const SUBADMINDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SUBADMIN_BY_ID });
    let { data: response } = await deleteSubAdmin(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_SUBADMIN_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(SUBADMINGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_SUBADMIN_BY_ID_FAIL, payload: err });
  }
};
