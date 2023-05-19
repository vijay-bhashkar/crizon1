import { createDemografic, deleteDemografic, getAllDemografic, updateDemografic, getAllDoctor ,getAllDisease } from "../../../services/Demografic.service";

export const DEMOGRAFIC_ADD = "DEMOGRAFIC_ADD";
export const DEMOGRAFIC_ADD_SUCCESS = "DEMOGRAFIC_ADD_SUCCESS";
export const DEMOGRAFIC_ADD_FAIL = "DEMOGRAFIC_ADD_FAIL";

export const GET_ALL_DOCTORS = "GET_ALL_DOCTORS";
export const GET_ALL_DOCTORS_SUCCESS = "GET_ALL_DOCTORS_SUCCESS";
export const DOCTORS_ADD_FAIL = "DOCTORS_ADD_FAIL";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";
export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";

export const GET_ALL_DEMOGRAFICS = "GET_ALL_DEMOGRAFICS";
export const GET_ALL_DEMOGRAFICS_SUCCESS = "GET_ALL_DEMOGRAFICS_SUCCESS";
export const GET_ALL_DEMOGRAFICS_FAIL = "GET_ALL_DEMOGRAFICS_FAIL";

export const UPDATE_DEMOGRAFIC_BY_ID = "UPDATE_DEMOGRAFIC_BY_ID";
export const UPDATE_DEMOGRAFIC_BY_ID_SUCCESS = "UPDATE_DEMOGRAFIC_BY_ID_SUCCESS";
export const UPDATE_DEMOGRAFIC_BY_ID_FAIL = "UPDATE_DEMOGRAFIC_BY_ID_FAIL";

export const SET_DEMOGRAFIC_OBJ = "SET_DEMOGRAFIC_OBJ";
export const SET_DEMOGRAFIC_OBJ_SUCCESS = "SET_DEMOGRAFIC_OBJ_SUCCESS";
export const SET_DEMOGRAFIC_OBJ_FAIL = "SET_DEMOGRAFIC_OBJ_FAIL";

export const GET_DEMOGRAFIC_BY_ID = "GET_DEMOGRAFIC_BY_ID";
export const GET_DEMOGRAFIC_BY_ID_SUCCESS = "GET_DEMOGRAFIC_BY_ID_SUCCESS";
export const GET_DEMOGRAFIC_BY_ID_FAIL = "GET_DEMOGRAFIC_BY_ID_FAIL";

export const DELETE_DEMOGRAFIC_BY_ID = "DELETE_DEMOGRAFIC_BY_ID";
export const DELETE_DEMOGRAFIC_BY_ID_SUCCESS = "DELETE_DEMOGRAFIC_BY_ID_SUCCESS";
export const DELETE_DEMOGRAFIC_BY_ID_FAIL = "DELETE_DEMOGRAFIC_BY_ID_FAIL";

export const DEMOGRAFICAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DEMOGRAFIC_ADD });
    let { data: response } = await createDemografic(formData);
    console.log(response);
    if (response) {
      dispatch(SETDEMOGRAFICObj(response.data))
      localStorage.setItem('items', JSON.stringify(response.data));

      dispatch({
        type: DEMOGRAFIC_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DEMOGRAFIC_ADD_FAIL, payload: err });
  }
};

export const DEMOGRAFICGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DEMOGRAFICS });
    let { data: response } = await getAllDemografic(formData);
    if (response) {
      dispatch({
        type: GET_ALL_DEMOGRAFICS_SUCCESS,
        payload: { data: response.data, message: response.message, total: response.total },
        paginatedObj:{
          page:response?.page,
          perPage:response?.perPage,
          total:response?.total,
          totalPages:response?.totalPages,
        }
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DEMOGRAFIC_ADD_FAIL, payload: err });
  }
};


export const GETALLDoctor = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DOCTORS });
    let { data: response } = await getAllDoctor(formData);

    if (response) {
      dispatch({
        type: GET_ALL_DOCTORS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DOCTORS_ADD_FAIL, payload: err });
  }
};

export const GETALLDisease = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DISEASE });
    let { data: response } = await getAllDisease(formData);
    if (response) {
      dispatch({
        type: GET_ALL_DISEASE_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DISEASE_ADD_FAIL, payload: err });
  }
};

export const SETDEMOGRAFICObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_DEMOGRAFIC_OBJ });
    if (formData) {
      dispatch({
        type: SET_DEMOGRAFIC_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_DEMOGRAFIC_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_DEMOGRAFIC_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const DEMOGRAFICUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DEMOGRAFIC_BY_ID });
    let { data: response } = await updateDemografic(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_DEMOGRAFIC_BY_ID_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_DEMOGRAFIC_BY_ID_FAIL, payload: err });
  }
};

export const DEMOGRAFICDelete = (obj) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DEMOGRAFIC_BY_ID });
    let { data: response } = await deleteDemografic(obj.id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_DEMOGRAFIC_BY_ID_SUCCESS,
        payload: response.message,
      });
      // dispatch(DEMOGRAFICGet(obj.query));
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_DEMOGRAFIC_BY_ID_FAIL, payload: err });
  }
};
