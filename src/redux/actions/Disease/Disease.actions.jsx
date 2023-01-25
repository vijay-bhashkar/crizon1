import { createDisease, getDisease, deleteDisease, updateDisease } from "../../../services/Disease.service";

export const DISEASE_ADD = "DISEASE_ADD";
export const DISEASE_ADD_SUCCESS = "DISEASE_ADD_SUCCESS";
export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HOD = "GET_ALL_HOD";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";

export const GET_ALL_DISEASES = "GET_ALL_DISEASES";
export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES_FAIL = "GET_ALL_DISEASES_FAIL";

export const UPDATE_DISEASE_BY_ID = "UPDATE_DISEASE_BY_ID";
export const UPDATE_DISEASE_BY_ID_SUCCESS = "UPDATE_DISEASE_BY_ID_SUCCESS";
export const UPDATE_DISEASE_BY_ID_FAIL = "UPDATE_DISEASE_BY_ID_FAIL";

export const SET_DISEASE_OBJ = "SET_DISEASE_OBJ";
export const SET_DISEASE_OBJ_SUCCESS = "SET_DISEASE_OBJ_SUCCESS";
export const SET_DISEASE_OBJ_FAIL = "SET_DISEASE_OBJ_FAIL";

export const GET_DISEASE_BY_ID = "GET_DISEASE_BY_ID";
export const GET_DISEASE_BY_ID_SUCCESS = "GET_DISEASE_BY_ID_SUCCESS";
export const GET_DISEASE_BY_ID_FAIL = "GET_DISEASE_BY_ID_FAIL";

export const DELETE_DISEASE_BY_ID = "DELETE_DISEASE_BY_ID";
export const DELETE_DISEASE_BY_ID_SUCCESS = "DELETE_DISEASE_BY_ID_SUCCESS";
export const DELETE_DISEASE_BY_ID_FAIL = "DELETE_DISEASE_BY_ID_FAIL";

export const DISEASEAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DISEASE_ADD });
    let { data: response } = await createDisease(formData);
    console.log(response);
    if (response) {
       dispatch(DISEASEGet())
      dispatch({
        type: DISEASE_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
};

export const DISEASEGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DISEASES });
    let { data: response } = await getDisease(formData);
    if (response) {
      dispatch({
        type: GET_ALL_DISEASES_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
};

export const SETDISEASEObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_DISEASE_OBJ });
    if (formData) {
      dispatch({
        type: SET_DISEASE_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_DISEASE_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_DISEASE_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const DISEASEUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DISEASE_BY_ID });
    let { data: response } = await updateDisease(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_DISEASE_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(DISEASEGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_DISEASE_BY_ID_FAIL, payload: err });
  }
};

export const DISEASEDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DISEASE_BY_ID });
    let { data: response } = await deleteDisease(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_DISEASE_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(DISEASEGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_DISEASE_BY_ID_FAIL, payload: err });
  }
};

