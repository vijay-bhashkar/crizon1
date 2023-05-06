import { createNutrition, deleteNutrition, getAllNutrition, updateNutrition, getNutritionByPatientId } from "../../../services/Nutrition.service";

export const NUTRITION_ADD = "NUTRITION_ADD";
export const NUTRITION_ADD_SUCCESS = "NUTRITION_ADD_SUCCESS";
export const NUTRITION_ADD_FAIL = "NUTRITION_ADD_FAIL";

export const GET_ALL_NUTRITIONS = "GET_ALL_NUTRITIONS";
export const GET_ALL_NUTRITIONS_SUCCESS = "GET_ALL_NUTRITIONS_SUCCESS";
export const GET_ALL_NUTRITIONS_FAIL = "GET_ALL_NUTRITIONS_FAIL";

export const UPDATE_NUTRITION_BY_ID = "UPDATE_NUTRITION_BY_ID";
export const UPDATE_NUTRITION_BY_ID_SUCCESS = "UPDATE_NUTRITION_BY_ID_SUCCESS";
export const UPDATE_NUTRITION_BY_ID_FAIL = "UPDATE_NUTRITION_BY_ID_FAIL";

export const SET_NUTRITION_OBJ = "SET_NUTRITION_OBJ";
export const SET_NUTRITION_OBJ_SUCCESS = "SET_NUTRITION_OBJ_SUCCESS";
export const SET_NUTRITION_OBJ_FAIL = "SET_NUTRITION_OBJ_FAIL";

export const GET_NUTRITION_BY_ID = "GET_NUTRITION_BY_ID";
export const GET_NUTRITION_BY_ID_SUCCESS = "GET_NUTRITION_BY_ID_SUCCESS";
export const GET_NUTRITION_BY_ID_FAIL = "GET_NUTRITION_BY_ID_FAIL";

export const DELETE_NUTRITION_BY_ID = "DELETE_NUTRITION_BY_ID";
export const DELETE_NUTRITION_BY_ID_SUCCESS = "DELETE_NUTRITION_BY_ID_SUCCESS";
export const DELETE_NUTRITION_BY_ID_FAIL = "DELETE_NUTRITION_BY_ID_FAIL";

export const NUTRITIONAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: NUTRITION_ADD });
    let { data: response } = await createNutrition(formData);
    // console.log(response);
    if (response) {
       dispatch(NUTRITIONGet())
      dispatch({
        type: NUTRITION_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: NUTRITION_ADD_FAIL, payload: err });
  }
};

export const NUTRITIONGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_NUTRITIONS });
    let { data: response } = await getAllNutrition(formData);
    if (response) {

      dispatch({
        type: GET_ALL_NUTRITIONS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: NUTRITION_ADD_FAIL, payload: err });
  }
};

export const NUTRITIONGet_BY_PATIENT_ID = (patientId) => async (dispatch) => {
  try {
    let { data: response } = await getNutritionByPatientId(patientId);
    if (response) {
      dispatch({
        type: SET_NUTRITION_OBJ_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: NUTRITION_ADD_FAIL, payload: err });
  }
};

export const SETNUTRITIONObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_NUTRITION_OBJ });
    if (formData) {
      dispatch({
        type: SET_NUTRITION_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_NUTRITION_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_NUTRITION_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const NUTRITIONUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_NUTRITION_BY_ID });
    let { data: response } = await updateNutrition(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_NUTRITION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(NUTRITIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_NUTRITION_BY_ID_FAIL, payload: err });
  }
};

export const NUTRITIONDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_NUTRITION_BY_ID });
    let { data: response } = await deleteNutrition(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_NUTRITION_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(NUTRITIONGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_NUTRITION_BY_ID_FAIL, payload: err });
  }
};
