import { createLeverDetail, deleteLeverDetail, getAllLeverDetail, updateLeverDetail } from "../../../services/LeverPerDetail.service";

export const LEVERPERDETAIL_ADD = "LEVERPERDETAIL_ADD";
export const LEVERPERDETAIL_ADD_SUCCESS = "LEVERPERDETAIL_ADD_SUCCESS";
export const LEVERPERDETAIL_ADD_FAIL = "LEVERPERDETAIL_ADD_FAIL";

export const GET_ALL_LEVERPERDETAILS = "GET_ALL_LEVERPERDETAILS";
export const GET_ALL_LEVERPERDETAILS_SUCCESS = "GET_ALL_LEVERPERDETAILS_SUCCESS";
export const GET_ALL_LEVERPERDETAILS_FAIL = "GET_ALL_LEVERPERDETAILS_FAIL";

export const UPDATE_LEVERPERDETAIL_BY_ID = "UPDATE_LEVERPERDETAIL_BY_ID";
export const UPDATE_LEVERPERDETAIL_BY_ID_SUCCESS = "UPDATE_LEVERPERDETAIL_BY_ID_SUCCESS";
export const UPDATE_LEVERPERDETAIL_BY_ID_FAIL = "UPDATE_LEVERPERDETAIL_BY_ID_FAIL";

export const SET_LEVERPERDETAIL_OBJ = "SET_LEVERPERDETAIL_OBJ";
export const SET_LEVERPERDETAIL_OBJ_SUCCESS = "SET_LEVERPERDETAIL_OBJ_SUCCESS";
export const SET_LEVERPERDETAIL_OBJ_FAIL = "SET_LEVERPERDETAIL_OBJ_FAIL";

export const GET_LEVERPERDETAIL_BY_ID = "GET_LEVERPERDETAIL_BY_ID";
export const GET_LEVERPERDETAIL_BY_ID_SUCCESS = "GET_LEVERPERDETAIL_BY_ID_SUCCESS";
export const GET_LEVERPERDETAIL_BY_ID_FAIL = "GET_LEVERPERDETAIL_BY_ID_FAIL";

export const DELETE_LEVERPERDETAIL_BY_ID = "DELETE_LEVERPERDETAIL_BY_ID";
export const DELETE_LEVERPERDETAIL_BY_ID_SUCCESS = "DELETE_LEVERPERDETAIL_BY_ID_SUCCESS";
export const DELETE_LEVERPERDETAIL_BY_ID_FAIL = "DELETE_LEVERPERDETAIL_BY_ID_FAIL";

export const LEVERPERDETAILAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LEVERPERDETAIL_ADD });
    let { data: response } = await createLeverDetail(formData);
  
    if (response) {
      dispatch(SETLEVERPERDETAILObj(response.data));
      dispatch({
        type: LEVERPERDETAIL_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERPERDETAIL_ADD_FAIL, payload: err });
  }
};

export const LEVERPERDETAILGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_LEVERPERDETAILS });
    let { data: response } = await getAllLeverDetail(formData);
    if (response) {

      dispatch({
        type: GET_ALL_LEVERPERDETAILS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: LEVERPERDETAIL_ADD_FAIL, payload: err });
  }
};

export const SETLEVERPERDETAILObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LEVERPERDETAIL_OBJ });
    if (formData) {
      dispatch({
        type: SET_LEVERPERDETAIL_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_LEVERPERDETAIL_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_LEVERPERDETAIL_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const LEVERPERDETAILUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LEVERPERDETAIL_BY_ID });
    let { data: response } = await updateLeverDetail(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_LEVERPERDETAIL_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(LEVERPERDETAILGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_LEVERPERDETAIL_BY_ID_FAIL, payload: err });
  }
};

export const LEVERPERDETAILDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LEVERPERDETAIL_BY_ID });
    let { data: response } = await deleteLeverDetail(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_LEVERPERDETAIL_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(LEVERPERDETAILGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_LEVERPERDETAIL_BY_ID_FAIL, payload: err });
  }
};
