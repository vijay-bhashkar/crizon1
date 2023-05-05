import { createFollowUp, deleteById, getAllFollowUp, updateById } from "../../../services/FollowUp.service";

export const FOLLOWUP_ADD = "FOLLOWUP_ADD";
export const FOLLOWUP_ADD_SUCCESS = "FOLLOWUP_ADD_SUCCESS";
export const FOLLOWUP_ADD_FAIL = "FOLLOWUP_ADD_FAIL";

export const DISEASE_ADD_FAIL = "DISEASE_ADD_FAIL";
export const GET_ALL_HODS_SUCCESS = "GET_ALL_HODS_SUCCESS";

export const GET_ALL_HODS = "GET_ALL_HODS";
export const GET_ALL_HOD = "GET_ALL_HOD";

export const GET_ALL_DISEASE = "GET_ALL_DISEASE";
export const GET_ALL_DISEASE_SUCCESS = "GET_ALL_DISEASE_SUCCESS";

export const GET_ALL_FOLLOWUPS = "GET_ALL_FOLLOWUPS";
export const GET_ALL_FOLLOWUPS_SUCCESS = "GET_ALL_FOLLOWUPS_SUCCESS";
export const GET_ALL_FOLLOWUPS_FAIL = "GET_ALL_FOLLOWUPS_FAIL";

export const GET_ALL_DISEASES_SUCCESS = "GET_ALL_DISEASES_SUCCESS";
export const GET_ALL_DISEASES  =  "GET_ALL_DISEASES";

export const UPDATE_FOLLOWUP_BY_ID = "UPDATE_FOLLOWUP_BY_ID";
export const UPDATE_FOLLOWUP_BY_ID_SUCCESS = "UPDATE_FOLLOWUP_BY_ID_SUCCESS";
export const UPDATE_FOLLOWUP_BY_ID_FAIL = "UPDATE_FOLLOWUP_BY_ID_FAIL";

export const SET_FOLLOWUP_OBJ = "SET_FOLLOWUP_OBJ";
export const SET_FOLLOWUP_OBJ_SUCCESS = "SET_FOLLOWUP_OBJ_SUCCESS";
export const SET_FOLLOWUP_OBJ_FAIL = "SET_FOLLOWUP_OBJ_FAIL";

export const GET_FOLLOWUP_BY_ID = "GET_FOLLOWUP_BY_ID";
export const GET_FOLLOWUP_BY_ID_SUCCESS = "GET_FOLLOWUP_BY_ID_SUCCESS";
export const GET_FOLLOWUP_BY_ID_FAIL = "GET_FOLLOWUP_BY_ID_FAIL";

export const DELETE_FOLLOWUP_BY_ID = "DELETE_FOLLOWUP_BY_ID";
export const DELETE_FOLLOWUP_BY_ID_SUCCESS = "DELETE_FOLLOWUP_BY_ID_SUCCESS";
export const DELETE_FOLLOWUP_BY_ID_FAIL = "DELETE_FOLLOWUP_BY_ID_FAIL";

export const FOLLOWUPAdd = (formData) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOWUP_ADD });
    let { data: response } = await createFollowUp(formData);
    console.log(response);
    if (response) {
       dispatch(FOLLOWUPGet())
      dispatch({
        type: FOLLOWUP_ADD_SUCCESS,
        payload: response.message,
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: FOLLOWUP_ADD_FAIL, payload: err });
  }
};

export const FOLLOWUPGet = (formData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_FOLLOWUPS });
    let { data: response } = await getAllFollowUp(formData);
    console.log(response);
    console.log("aaaa");
    if (response) {
      dispatch({
        type: GET_ALL_FOLLOWUPS_SUCCESS,
        payload: { data: response.data, message: response.message, total:response.total },
        paginatedObj : {
          page: response?.page,
          limit: response?.limit,
          totalPages: response?.totalPages,
          total: response?.total
        }
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: FOLLOWUP_ADD_FAIL, payload: err });
  }
};

// export const DISEASEGet = (formData) => async(dispatch) => {
//   try{
//     dispatch({ type: GET_ALL_DISEASES });
//     let { data: response } = await diseaseUser(formData);
//     if (response) {
//       dispatch({
//         type: GET_ALL_DISEASES_SUCCESS,
//         payload: { data: response.data, message: response.message },
//       });
//     }
//   }catch(err){
//     console.error(err);
//     dispatch({ type: DISEASE_ADD_FAIL, payload: err });
//   }
// }

export const SETFOLLOWUPObj = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_FOLLOWUP_OBJ });
    if (formData) {
      dispatch({
        type: SET_FOLLOWUP_OBJ_SUCCESS,
        payload: { data: formData },
      });
    } else {
      dispatch({
        type: SET_FOLLOWUP_OBJ_SUCCESS,
        payload: { data: null },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: SET_FOLLOWUP_OBJ_FAIL, payload: { message: "NOT FOUND" } });
  }
};

export const FOLLOWUPUpdate = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_FOLLOWUP_BY_ID });
    let { data: response } = await updateById(formData, id);
    if (response) {
      console.log(response);
      dispatch({
        type: UPDATE_FOLLOWUP_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(FOLLOWUPGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_FOLLOWUP_BY_ID_FAIL, payload: err });
  }
};

export const FOLLOWUPDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FOLLOWUP_BY_ID });
    let { data: response } = await deleteById(id);
    if (response) {
      console.log(response);
      dispatch({
        type: DELETE_FOLLOWUP_BY_ID_SUCCESS,
        payload: response.message,
      });
      dispatch(FOLLOWUPGet());
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_FOLLOWUP_BY_ID_FAIL, payload: err });
  }
};

// export const HODGet = (formData) => async(dispatch) => {
//   try{
//     dispatch({ type: GET_ALL_HOD });
//     let { data: response } = await getAllHod(formData);
//     if (response) {
//       dispatch({
//         type: GET_ALL_HODS_SUCCESS,
//         payload: { data: response.data, message: response.message },
//       });
//     }
//   }catch(err){
//     console.error(err);
//     dispatch({ type: DISEASE_ADD_FAIL, payload: err });
//   }
// }

// export const ALLDISEASEGet = (formData) => async(dispatch) => {
//   try{
//     dispatch({ type: GET_ALL_DISEASE });
//     let { data: response } = await getAlldiseases(formData);
//     if (response) {
//       dispatch({
//         type: GET_ALL_DISEASE_SUCCESS,
//         payload: { data: response.data, message: response.message },
//       });
//     }
//   }catch(err){
//     console.error(err);
//     dispatch({ type: DISEASE_ADD_FAIL, payload: err });
//   }
// }
