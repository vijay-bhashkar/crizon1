import { createHod, deleteHod, getAllHod, updateHod, diseaseUser, getAlldiseases } from "../../../services/Hod.service";

export const HOD_ADD = "HOD_ADD";
export const HOD_ADD_SUCCESS = "HOD_ADD_SUCCESS";
export const HOD_ADD_FAIL = "HOD_ADD_FAIL";

export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HODS_SUCCESS = "GET_ALL_HODS_SUCCESS";
export const GET_ALL_HODS_FAIL = "GET_ALL_HODS_FAIL";

export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES  =  "GET_ALL_DISEASES";

export const UPDATE_HOD_BY_ID = "UPDATE_HOD_BY_ID";
export const UPDATE_HOD_BY_ID_SUCCESS = "UPDATE_HOD_BY_ID_SUCCESS";
export const UPDATE_HOD_BY_ID_FAIL = "UPDATE_HOD_BY_ID_FAIL";

export const SET_HOD_OBJ = "SET_HOD_OBJ";
export const SET_HOD_OBJ_SUCCESS = "SET_HOD_OBJ_SUCCESS";
export const SET_HOD_OBJ_FAIL = "SET_HOD_OBJ_FAIL";

export const GET_HOD_BY_ID = "GET_HOD_BY_ID";
export const GET_HOD_BY_ID_SUCCESS = "GET_HOD_BY_ID_SUCCESS";
export const GET_HOD_BY_ID_FAIL = "GET_HOD_BY_ID_FAIL";

export const DELETE_HOD_BY_ID = "DELETE_HOD_BY_ID";
export const DELETE_HOD_BY_ID_SUCCESS = "DELETE_HOD_BY_ID_SUCCESS";
export const DELETE_HOD_BY_ID_FAIL = "DELETE_HOD_BY_ID_FAIL";

export const HODAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: HOD_ADD });
    let { data: response } = await createHod(formData);
    // console.log(response);
    if (response) {
       dispatch(HODGet())
      dispatch({
        type: HOD_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    // console.error(err);
    dispatch({ type: HOD_ADD_FAIL, payload: err });
  }
};

export const HODGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_HODS });
    let { data: response } = await getAllHod(formData);
    if (response) {
      dispatch({
        type: GET_ALL_HODS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    // console.error(err);
    dispatch({ type: HOD_ADD_FAIL, payload: err });
  }
};

export const DISEASEGet = (formData) => async(dispatch) => {
  try{
    dispatch({ type: GET_ALL_DISEASES });
    let { data: response } = await getAlldiseases(formData);
    if (response) {
      dispatch({
        type: GET_ALL_DISEASES_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  }catch(err){
    // console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
}

export const SETHODObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_HOD_OBJ });
    if (formData) {
      dispatch({
        type: SET_HOD_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_HOD_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    // console.error(err);
    dispatch({ type: SET_HOD_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const HODUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOD_BY_ID });
    let { data: response } = await updateHod(formData, id);
    if (response) {
      // console.log(response);
      dispatch({
        type: UPDATE_HOD_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(HODGet());
    }
  } catch (err) {
    // console.error(err);
    dispatch({ type: UPDATE_HOD_BY_ID_FAIL, payload: err });
  }
};

export const HODDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HOD_BY_ID });
    let { data: response } = await deleteHod(id);
    if (response) {
      // console.log(response);
      dispatch({
        type: DELETE_HOD_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(HODGet());
    }
  } catch (err) {
    // console.error(err);
    dispatch({ type: DELETE_HOD_BY_ID_FAIL, payload: err });
  }
};
