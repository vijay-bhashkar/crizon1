import { createUser, deleteUser, getAllUsers, updateUser, diseaseUser, getAllHod, getAlldiseases } from "../../../services/Customer.service";

export const CUSTOMER_ADD = "CUSTOMER_ADD";
export const CUSTOMER_ADD_SUCCESS = "CUSTOMER_ADD_SUCCESS";
export const CUSTOMER_ADD_FAIL = "CUSTOMER_ADD_FAIL";

export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";
export const GET_ALL_HODS_SUCCESS = "GET_ALL_HODS_SUCCESS";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HOD = "GET_ALL_HOD";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";

export const GET_ALL_CUSTOMERS = "GET_ALL_CUSTOMERS";
export const GET_ALL_CUSTOMERS_SUCCESS = "GET_ALL_CUSTOMERS_SUCCESS";
export const GET_ALL_CUSTOMERS_FAIL = "GET_ALL_CUSTOMERS_FAIL";

export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES  =  "GET_ALL_DISEASES";

export const UPDATE_CUSTOMER_BY_ID = "UPDATE_CUSTOMER_BY_ID";
export const UPDATE_CUSTOMER_BY_ID_SUCCESS = "UPDATE_CUSTOMER_BY_ID_SUCCESS";
export const UPDATE_CUSTOMER_BY_ID_FAIL = "UPDATE_CUSTOMER_BY_ID_FAIL";

export const SET_CUSTOMER_OBJ = "SET_CUSTOMER_OBJ";
export const SET_CUSTOMER_OBJ_SUCCESS = "SET_CUSTOMER_OBJ_SUCCESS";
export const SET_CUSTOMER_OBJ_FAIL = "SET_CUSTOMER_OBJ_FAIL";

export const GET_CUSTOMER_BY_ID = "GET_CUSTOMER_BY_ID";
export const GET_CUSTOMER_BY_ID_SUCCESS = "GET_CUSTOMER_BY_ID_SUCCESS";
export const GET_CUSTOMER_BY_ID_FAIL = "GET_CUSTOMER_BY_ID_FAIL";

export const DELETE_CUSTOMER_BY_ID = "DELETE_CUSTOMER_BY_ID";
export const DELETE_CUSTOMER_BY_ID_SUCCESS = "DELETE_CUSTOMER_BY_ID_SUCCESS";
export const DELETE_CUSTOMER_BY_ID_FAIL = "DELETE_CUSTOMER_BY_ID_FAIL";

export const CUSTOMERAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_ADD });
    let { data: response } = await createUser(formData);
    console.log(response);
    if (response) {
       dispatch(CUSTOMERGet())
      dispatch({
        type: CUSTOMER_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: CUSTOMER_ADD_FAIL, payload: err });
  }
};

export const CUSTOMERGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CUSTOMERS });
    let { data: response } = await getAllUsers(formData);
    console.log(response);
    console.log("aaaaaaaaaaaa");
    if (response) {

      dispatch({
        type: GET_ALL_CUSTOMERS_SUCCESS,
        payload: { data: response.data, message: response.message },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: CUSTOMER_ADD_FAIL, payload: err });
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

export const SETCUSTOMERObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_CUSTOMER_OBJ });
    if (formData) {
      dispatch({
        type: SET_CUSTOMER_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_CUSTOMER_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_CUSTOMER_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const CUSTOMERUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CUSTOMER_BY_ID });
    let { data: response } = await updateUser(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_CUSTOMER_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(CUSTOMERGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_CUSTOMER_BY_ID_FAIL, payload: err });
  }
};

export const CUSTOMERDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CUSTOMER_BY_ID });
    let { data: response } = await deleteUser(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_CUSTOMER_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(CUSTOMERGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_CUSTOMER_BY_ID_FAIL, payload: err });
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
