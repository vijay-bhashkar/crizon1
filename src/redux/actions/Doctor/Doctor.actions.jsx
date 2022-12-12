import { createDoctor, deleteById, getAllDoctors, updateDoctors, diseaseUser, getAllHod, getAlldiseases } from "../../../services/Doctor.service";

export const DOCTOR_ADD = "DOCTOR_ADD";
export const DOCTOR_ADD_SUCCESS = "DOCTOR_ADD_SUCCESS";
export const DOCTOR_ADD_FAIL = "DOCTOR_ADD_FAIL";

export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";
export const GET_ALL_HODS_SUCCESS = "GET_ALL_HODS_SUCCESS";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HOD = "GET_ALL_HOD";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";

export const GET_ALL_DOCTORS = "GET_ALL_DOCTORS";
export const GET_ALL_DOCTORS_SUCCESS = "GET_ALL_DOCTORS_SUCCESS";
export const GET_ALL_DOCTORS_FAIL = "GET_ALL_DOCTORS_FAIL";

export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES  =  "GET_ALL_DISEASES";

export const UPDATE_DOCTOR_BY_ID = "UPDATE_DOCTOR_BY_ID";
export const UPDATE_DOCTOR_BY_ID_SUCCESS = "UPDATE_DOCTOR_BY_ID_SUCCESS";
export const UPDATE_DOCTOR_BY_ID_FAIL = "UPDATE_DOCTOR_BY_ID_FAIL";

export const SET_DOCTOR_OBJ = "SET_DOCTOR_OBJ";
export const SET_DOCTOR_OBJ_SUCCESS = "SET_DOCTOR_OBJ_SUCCESS";
export const SET_DOCTOR_OBJ_FAIL = "SET_DOCTOR_OBJ_FAIL";

export const GET_DOCTOR_BY_ID = "GET_DOCTOR_BY_ID";
export const GET_DOCTOR_BY_ID_SUCCESS = "GET_DOCTOR_BY_ID_SUCCESS";
export const GET_DOCTOR_BY_ID_FAIL = "GET_DOCTOR_BY_ID_FAIL";

export const DELETE_DOCTOR_BY_ID = "DELETE_DOCTOR_BY_ID";
export const DELETE_DOCTOR_BY_ID_SUCCESS = "DELETE_DOCTOR_BY_ID_SUCCESS";
export const DELETE_DOCTOR_BY_ID_FAIL = "DELETE_DOCTOR_BY_ID_FAIL";

export const DOCTORAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_ADD });
    let { data: response } = await createDoctor(formData);
    console.log(response);
    if (response) {
       dispatch(DOCTORGet())
      dispatch({
        type: DOCTOR_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DOCTOR_ADD_FAIL, payload: err });
  }
};

export const DOCTORGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DOCTORS });
    let { data: response } = await getAllDoctors(formData);
    console.log(response);
    // console.log("aaaaaaaaaaaa");
    if (response) {

      dispatch({
        type: GET_ALL_DOCTORS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DOCTOR_ADD_FAIL, payload: err });
  }
};

export const DISEASEGet = (formData) => async(dispatch) => {
  try{
    dispatch({ type: GET_ALL_DISEASES });
    let { data: response } = await diseaseUser(formData);
    if (response) {
      dispatch({
        type: GET_ALL_DISEASES_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  }catch(err){
    console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
}

export const SETDOCTORObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_DOCTOR_OBJ });
    if (formData) {
      dispatch({
        type: SET_DOCTOR_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_DOCTOR_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_DOCTOR_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const DOCTORUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DOCTOR_BY_ID });
    let { data: response } = await updateDoctors(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_DOCTOR_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(DOCTORGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_DOCTOR_BY_ID_FAIL, payload: err });
  }
};

export const DOCTORDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DOCTOR_BY_ID });
    let { data: response } = await deleteById(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_DOCTOR_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(DOCTORGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_DOCTOR_BY_ID_FAIL, payload: err });
  }
};

export const HODGet = (formData) => async(dispatch) => {
  try{
    dispatch({ type: GET_ALL_HOD });
    let { data: response } = await getAllHod(formData);
    if (response) {
      dispatch({
        type: GET_ALL_HODS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  }catch(err){
    console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
}

export const ALLDISEASEGet = (formData) => async(dispatch) => {
  try{
    dispatch({ type: GET_ALL_DISEASE });
    let { data: response } = await getAlldiseases(formData);
    if (response) {
      dispatch({
        type: GET_ALL_DISEASE_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  }catch(err){
    console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
}
